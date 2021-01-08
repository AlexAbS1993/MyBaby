import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDatesThunk } from '../../redux/datasReducer'
import { DatesMapped } from './DatesMapped'
import {Card, Container, Row, Col} from 'react-bootstrap'
import { CreateDate } from './CreateDate'
import {Paginator} from '../tools/Paginator'
import {DateTime} from 'luxon'


export const Dates = () => {
    const datesList = useSelector(state => state.dates.dates)
    const currentPage = useSelector(state => state.dates.currentPage)
    const count = useSelector(state => state.dates.countOfDates)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDatesThunk(1))
        return () => {
            dispatch({type: "RESET"})}
    }, [])

    const  datesM = datesList.map((e) => {
            const date = DateTime.fromISO(e.date).toLocaleString()
            const dateEnd = `${date}`
        return <DatesMapped dateEnd={dateEnd} e={e}  key={e.date}/>
    })
    return (
        <Container>
            <CreateDate />
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Главные дни Валентина</Card.Title>
                    <Row className="justify-content-center">
                            <Col lg="auto"><Paginator currentPage={currentPage} count={count} func={getDatesThunk} lim="5"/></Col>
                        </Row> 
                        {datesM}
                    
                </Card.Body>
            </Card>
        </Container>   
    )
}