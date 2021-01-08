import React, { useState } from 'react'
import {createDateThunk} from '../../redux/datasReducer'
import {Form, Button, Container, Row, Card, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {datesAPI} from '../../redux/api/dates'


export const CreateDate = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.dates.currentPage)
    const [datas, setDatas] = useState({
        date: "", discription: "", image: null
    })
    console.log(datas)
    const [image, setImage] = useState()
    const onChangeField = (e) => {
        e.preventDefault()
        setDatas({...datas, [e.target.name]: e.target.value})
    }

    const babyFiltred = useSelector(state => state.dates.dates.filter(e => true))

    const onChangeImage = (e) => {
        setDatas({...datas, image: e.target.files[0]})
             
    }

    const createNewDate = (e) => {
        e.preventDefault()
        const data = {datas, currentPage}
        dispatch(createDateThunk(data))     
    }
    return (
        <Container className="mb-2">
        <Card className='p-4'>
        <Form>
            <Row>
                <Col className='col-4 col-lg-2'><Form.Group controlId="dateForm">
                <Form.Label>Введите дату</Form.Label>
                <Form.Control type="date" name="date" value={datas.date} onChange={(e) => {onChangeField(e)}}/>
            </Form.Group></Col>

                <Col><Form.Group controlId="discriptionForm">
                <Form.Label>Что случилось в этот день?</Form.Label>
                <Form.Control type="textarea" placeholder="Описание" name="discription" value={datas.discription} onChange={(e) => {onChangeField(e)}} />
            </Form.Group></Col>
            </Row>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Example file input" name="image" onChange={(e) => {onChangeImage(e)}}/>
                {/* <input type="file" id="exampleFormControlFile1" label="Example file input" name="image" onChange={(e) => {onChangeImage(e)}}/> */}
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => {createNewDate(e)}}>
                Создать дату
            </Button>
         </Form>
         </Card>
</Container>
    )
}