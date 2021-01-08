import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import baby from '../../styled/baby.png'

const style={width: '150px', height: "auto"}

export const DatesMapped = ({dateEnd, e}) => {
        return (
    <Card style={{ width: '100%' }}>          
                <Card.Body>
                    <Row>
                        <Col className='col-4'> <Card.Img variant="top" src={e.image || baby} style={{width: '100%', height: "auto"}}/></Col>
                        <Col> <Card.Title>{dateEnd}</Card.Title>
                    <Card.Text>
                    {e.discription} </Card.Text>
                    </Col>
                    </Row>
                </Card.Body>
    </Card>
    
    )
}