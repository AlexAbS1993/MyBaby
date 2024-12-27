'use client'

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPhrases} from '../../redux/phrasesReducer'
import {Container, Row, Col} from 'react-bootstrap'
import { OnePhrase } from './OnePhrase'
import {Card} from 'react-bootstrap'
import {CreatePhrase} from './CreatePhrase' 
import {Paginator} from '../tools/Paginator'

export default function Phrases(){
    const dispatch = useDispatch()
    const phrases = useSelector(state => state.phrases.phrases)
    const currentPage = useSelector(state => state.phrases.currentPage)
    const count = useSelector(state => state.phrases.countOfPhrases)
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(getPhrases(currentPage))
    }, [])
    const mappedPhrases = phrases.map((element) => {
        return <OnePhrase element={element} key={element._id} auth={auth.login} currentPage={currentPage} dispatch={dispatch}/>
    })

    return (
        <Container>
            <Card >
                    <Card.Body>
                        <Card.Title>Фразы детей</Card.Title>
                        <CreatePhrase />
                        <Row className="justify-content-center">
                            <Col lg="auto"><Paginator currentPage={currentPage} count={count} func={getPhrases} lim="5"/></Col>
                        </Row> 
                        {mappedPhrases}     
                    </Card.Body>
            </Card>        
        </Container>
    )
}