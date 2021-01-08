import React from 'react'
import {Col} from 'react-bootstrap'
import {MiniPhoto} from '../../styled/styled'

export const MappedPhoto = ({element, index, setCurrentPhoto, setIsBig}) => {
    
    return (
        <Col className="col-4 mb-2 align-self-center p-1">
                 <MiniPhoto src={element.photo}  onClick={() => {setCurrentPhoto(index); setIsBig(true)}} />
        </Col>
    )
}