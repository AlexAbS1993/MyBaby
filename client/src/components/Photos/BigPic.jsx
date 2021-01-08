import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {BigPhoto} from '../../styled/styled'

export const BigPic = ({currentPhoto, setCurrentPhoto, source, setIsBig}) => {
    const setBig = (e) => {
        e.stopPropagation()
        setIsBig(false)
    }
    const changePhotoUp = (e) => {
        e.stopPropagation()
        if(currentPhoto < source.length - 1){
            setCurrentPhoto(+(currentPhoto + 1))
        }
        else (
            setCurrentPhoto(0)
        )
    }
    const changePhotoDown = (e) => {
        e.stopPropagation()
        if(currentPhoto < 1){
            setCurrentPhoto(+(currentPhoto + source.length - 1))
        }
        else (
            setCurrentPhoto(+(currentPhoto - 1))
        )
    }
    return (
        <BigPhoto onClick={(e) => { setBig(e)}} >
            <Container fluid className="mt-2">
                <Row className="justify-content-center">
                     <Col className="col-4  p-0">
                <img src={source[currentPhoto].photo} alt="sorry" style={{objectFit: "contain",objectPosition: "right top" , width:"100%", height: "100vh"}} />
                     </Col>
                     <Col className="col-2 p-0">
                         <Card>
                         Комментарии
                         <Button onClick={(e)=> {changePhotoUp(e)}}>
                             Следующее фото {'>'}
                         </Button>
                         <Button onClick={(e)=> {changePhotoDown(e)}}>
                            {'<'} Предыдущее фото 
                         </Button>
                         </Card>
                     </Col>
                </Row>
            </Container>
        </BigPhoto>
    )
}