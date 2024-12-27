'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addComm} from '../../redux/phrasesReducer'
import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const CommentaryCreatorOver = ({id, auth}) => {
    const [datas, setComType] = useState("")
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.phrases.currentPage)

    const submit = (e) => {
        e.preventDefault()
        setComType("")      
        dispatch(addComm({datas, id, currentPage, auth}))
    }
    const changeDatas = (e) => {
        e.stopPropagation()
        setComType(e.target.value)
    }

    return (
        <Form  >
                <Form.Group controlId={`formBasicComment${id}`}>
                <Form.Control type="text" placeholder="Введите комментарий" name="comtype" value={datas} onChange={(e) => {changeDatas(e)}}/>
                </Form.Group>
                <Button variant="success" type="submit" onClick={(e) => {submit(e)}}>
                    Оставить комментарий
                </Button>
        </Form>
    )
}



export const CommentaryCreator = React.memo(CommentaryCreatorOver)