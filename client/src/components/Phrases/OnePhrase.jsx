import React from 'react'
import { useState } from 'react'
import {Card, Button, Accordion, Row, Col} from 'react-bootstrap'
import {Commentary} from './Commentary'
import {changePhraseThunk} from '../../redux/phrasesReducer'


export const OnePhrase = ({element, auth, currentPage, dispatch}) => {
    const date = new Date(element.dateOfPublish)
    const month = +(date.getMonth() + 1)
    const year = date.getFullYear()
    const day = date.getDate()
    const evo = element.wordEvo.map((e) => {
        return <span key={e}>{e} --{">"} </span>
    })
    const [phrase, setPhrase] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changePhraseThunk({phrase, currentPage, _id: element._id}))
    }
    return (
  <Card>
  <Card.Body>
    <Card.Title>{element.phrase}</Card.Title>
    <Row>
    <Col>
    <Card.Text>   
     Значение: {element.realMean}
     <br/>
     <small>Эволюция слова: {evo}</small>
    </Card.Text>
    <hr/>
    <p>Дата: {day}/{month}/{year} - {element.author.login}</p>
    </Col>   
    <Col className="col-4">
    <input type="text" name="phrase" placeholder="Слово изменилось?" value={phrase} onChange={(e) => {e.preventDefault(); setPhrase(e.target.value)}}/>
    <button className="btn btn-warning text-dark" onClick={(e) => { handleSubmit(e)}}> Обновить </button>
    </Col>
    </Row>

    <Accordion>
    <Card>
         <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
            Комментарии <small>{element.comment.length}</small>
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Commentary comment={element.comment} id={element._id} author={element.author.login} auth={auth}/>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
        </Accordion>
  </Card.Body>
</Card>
    ) 
}