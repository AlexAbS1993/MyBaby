'use client'

import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBaby, nullifyBaby } from '@/redux/babyReducer'
import {DateTime} from 'luxon'

export default function Child({name}){
    const babyState = useSelector(state => state.baby)
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        let find
        switch(name){
            case 'valentin': {
                find = "Валентин"
                break
            }
            case "inna": {
                find = "Инна"
                break
            }
        }
         dispatch(getBaby(find))
         return () => {
            dispatch(nullifyBaby())
            setReady(false)
         }
    }, [])
    useEffect(() => {
        if (babyState.birthDate && babyState.photo){
            setReady(true)
        }
        return () => {
            setReady(false)
        }
    }, [babyState.birthDate])
    if (!ready){
        return <></>
    }
    return (
        <Container>
            <Card className="p-2">
                 <Row>
                    {
                        babyState.photo && <Photo photo={babyState.photo}/>
                    }
                    <Col>
                    <Card.Title>
                    <Row>{babyState.secondName} {babyState.firstName} {babyState.thirdName} </Row>
                    </Card.Title>
                    <Row><h3> 
                    {
                        babyState.birthDate ? <HowOld birthDate={babyState.birthDate}/> : <></>
                    }    
                    </h3>  </Row>
                </Col>
                </Row> 
        </Card>
        </Container>
        )
}

function HowOld({birthDate}){
    const getOld = () => {
        var dt = DateTime.now();
        let date = new Date(birthDate)
        const valentinBirthday = DateTime.local(date.getFullYear(), date.getMonth()+1, date.getDate())
        let newdt = dt.minus(valentinBirthday.c)
        return `${newdt.year} год ${newdt.month} месяцев ${newdt.day} дней`
    }
    return <>
    {getOld()}
    </>
}

function Photo({photo}){
    return <>
    <Col className="col-3"><img src={photo} className="w-100"/></Col>
    </>
}