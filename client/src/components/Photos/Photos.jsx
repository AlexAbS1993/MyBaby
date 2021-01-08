import React, {useEffect, useMemo, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Container, Card, Row} from 'react-bootstrap'
import {getPhotoThunk, setCurrent, setCurrentPage, setPhotoThunk} from '../../redux/photoReducer'
import {MappedPhoto} from './MappedPhoto'
import {BigPic} from './BigPic'
import { Button } from 'react-bootstrap'

export const Photos = () => {
    const auth = useSelector(state => state.auth.isAuth)
    const photos = useSelector(state => state.photos.photos)
    const currentPage = useSelector(state => state.photos.currentPage)
    const currentPhoto = useSelector(state => state.photos.currentPhoto)
    const countOfphoto = useSelector(state => state.photos.countOfphoto)
    const [isBig, setIsBig] = useState(false)
    const [image, setImage] = useState(null)
    console.log(image)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPhotoThunk(currentPage))
        return () => {
            dispatch({type: "RESET"})
        }
    }, [])
    const setCurrentPhoto = (index) => {
        dispatch(setCurrent(index))
    }

    const photosMapped = photos.map((element, index, array) => {
        return <MappedPhoto element={element} key={element.photo} index={index} setIsBig={setIsBig} setCurrentPhoto={setCurrentPhoto}/>
    })

    const nextSkip = () => {
        dispatch(getPhotoThunk(+(currentPage + 1)))
        dispatch(setCurrentPage(+(currentPage + 1)))
    }
    const prevSkip = () => {
        dispatch(getPhotoThunk(+(currentPage - 1)))
        dispatch(setCurrentPage(+(currentPage - 1)))
    }

    const countOfPages = useMemo(() => {
        return Math.ceil(+(countOfphoto / 9))
    }, [countOfphoto]) 

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setPhotoThunk(image))
        setImage(null)
    }
    const handleChange = (e) => {
        setImage(e.target.files[0])
    }
    const handleReset = (e) => {
        setImage(null)
    }
   
    if(!auth){
        return <Redirect to="/login" />
    }

    return (
        <Container>
            <Card>
                <Container>
                <Row>
                <input type="file" name="image" id="image" onChange={(e) => {handleChange(e)}} style={{display: "none"}} /> 
                <label htmlFor="image" className='ml-2 mt-3'>{image ? `Файл выбран: ${image.name}` : "Выберите файл"}</label>
                <Button onClick={(e) => {handleSubmit(e)}} className='ml-2 mt-2'> Отправить </Button>
                <Button onClick={(e) => {handleReset(e)}} className='ml-1 mt-2'> Сброс </Button>
                </Row>
                <Row className="justify-content-center mt-2"> 
                <Button onClick={() => {prevSkip()}} disabled={ currentPage === 1 ? true : false }> {`< Назад`} </Button> 
                <Button onClick={() => {nextSkip()}} disabled={ countOfPages === currentPage ? true : false }> {` Вперед >`} </Button> </Row>
                <Row className="p-3 justify-content-space-between">
                    {photosMapped}
                </Row>
                <Row className="justify-content-center mt-2"> 
                <Button onClick={() => {prevSkip()}} disabled={ currentPage === 1 ? true : false }> {`< Назад`} </Button> 
                <Button onClick={() => {nextSkip()}} disabled={ countOfPages === currentPage ? true : false }> {` Вперед >`} </Button> </Row>
                {isBig ? <BigPic source={photos} setCurrentPhoto={setCurrentPhoto} currentPhoto={currentPhoto} setIsBig={setIsBig}/> : <></>}
                </Container>
                
            </Card>
        </Container>
    )
}