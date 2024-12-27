import React, {useMemo} from 'react'
import {Pagination} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {PaginatorAct} from '../../styled/styled'

export const Paginator = ({currentPage, count, func, lim}) => {
        const dispatch = useDispatch()
        const last = useMemo( () => {
            return Math.ceil(count / lim)},[count])
        const sendSkip = (element) => {
            dispatch(func(element))
        }
        const pages = []
        for (let i = 1; i <= last; i++){
            pages.push(i)
        }

        const pag = pages.map((element) => {
            return <PaginatorAct 
            element={element || 1} 
            $currentPage={currentPage || 1} 
            key={`${element}`} 
            onClick={() => {sendSkip(element)}}> 
            {element} 
            </PaginatorAct>
        })
    return (<Pagination>
        {pag}
      </Pagination>)
}