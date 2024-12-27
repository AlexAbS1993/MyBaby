'use client'

import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button, Container, Row} from 'react-bootstrap'
import { createPhrase } from '../../redux/phrasesReducer'

export const CreatePhrase = () => {
    const currentPage = useSelector(state => state.phrases.currentPage)
    const dispatch = useDispatch()
    const [datas, setDatas] = useState({
        phrase: "",
        realMean: "",
        childAuthor: "Валентин"
    })
    const changeDatas = (e) => {
        setDatas({...datas, [e.target.name]: e.target.value})
    }
    const submit = (e) => {
        e.preventDefault()
        datas.dateOfPublish = Date.now()
        dispatch(createPhrase({datas, currentPage}))
    }

    return (
        <Container>
        <Form>
            <Row>
                <Form.Group controlId="formBasicPhrase" className='col-4 mb-3'>
                <Form.Control type="text" placeholder="Введите фразу" name="phrase" value={datas.phrase} onChange={(e) => {changeDatas(e)}}/>
                </Form.Group>
                <Form.Group controlId="formBasicRealMean" className='col-4 mr-3 mb-3'>
                <Form.Control type="text" placeholder="Введите значение" name="realMean" value={datas.realMean} onChange={(e) => {changeDatas(e)}}/>
                </Form.Group>
                </Row> 
                <Row>
                <Form.Group controlId="formBasicPhrase" className='col-6 mb-3'>
                <Form.Label>Кто сказал фразу</Form.Label>
                <Form.Select aria-label="Кто сказал" defaultValue={"Валентин"} onChange={(e) => {changeDatas(e)}} name='childAuthor'>   
                <option value="Валентин">Валентин</option>
                <option value="Инна">Инна</option>
                </Form.Select>
                </Form.Group>
                </Row>
                <Button variant="success" type="submit" onClick={(e) => {submit(e)}} className='col-3 mb-3'>
                    Добавить
                </Button>
                    
        </Form>
        </Container>
    )
}