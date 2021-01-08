import React, {useMemo} from 'react'
import { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getBaby } from '../../redux/babyReducer'
import {DateTime, Duration, Interval} from 'luxon'

export const Main = () => {
    const authState = useSelector(state => state.auth)
    const babyState = useSelector(state => state.baby)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBaby())
    }, [])
    
    const getOld = () => {
        const valentinBirthday = DateTime.fromISO(babyState.birthDate).toObject()
        const difTwo = Duration.fromObject(valentinBirthday)
        const different = DateTime.local().minus(difTwo)
        return `${different.year} год ${different.month} месяцев ${different.day+1} дней`
    }
    const old = getOld()

    if (!authState.isAuth){
        return <Redirect to="/login" />
    }
    
    return (
        <Container>
            <Card className="p-2">
                 <Row>
                    <Col className="col-3"><img src={babyState.photo} className="w-100"/></Col>
                    <Col>
                    <Card.Title>
                    <Row>{babyState.secondName} {babyState.firstName} {babyState.thirdName} </Row>
                    </Card.Title>
                    <Row><h3> {old} </h3>  </Row>
                </Col>
                </Row> 
        </Card>
        </Container>
        )
}