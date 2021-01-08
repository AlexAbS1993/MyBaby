import React, {useState, useEffect, useMemo} from 'react'
import {Form, Button, Container, Row} from 'react-bootstrap'
import {CardStyled} from '../../styled/styled'
import {logIn, setError} from '../../redux/authReducer'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {AlertComponent} from '../tools/Alert'

export const Login = () => {
    const [tryIt, setTry] = useState(false)
    const [datas, setDatas] = useState({login:"", password: ""})
    const changeDatas = (e) => {
        setDatas({...datas, [e.target.name]: e.target.value})
    }
    const [showError, setShowError] = useState(false)
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const errorMessage = useMemo(() => {return authState.error}, [authState.error])
     // Обнуление
        
     const nullify = () => {
        setDatas({login:"", password: "", statusFamily: "", invite: ""})
        setShowError(false)
        setTry(false)
    }
        // Возврат значений при удалении компонента
        useEffect(() => {
            dispatch(setError(""))
            return nullify()
        }, [])

        useEffect(() => {  
            if (errorMessage !== "" & errorMessage !== "Success" & errorMessage !== undefined){
              setShowError(true)}
            else {
              setShowError(false)
            }
        }, [errorMessage])

    const submit = (e) => {
        e.preventDefault()
        dispatch(logIn(datas))
        setTry(true)
    }
    if (authState.isAuth){
        return <Redirect to="/main" />
    }
    return (
        <Container fluid="lg">
            <Row className="justify-content-center">
                <CardStyled bg="primary" border="success">
                     <Form  >
                         <Form.Group controlId="formBasicEmail">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control type="text" placeholder="Введите логин" name="login" value={datas.login} onChange={(e) => {changeDatas(e)}}/>
                         </Form.Group>
                         <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль" name="password" value={datas.password} onChange={(e) => {changeDatas(e)}}/>
                         </Form.Group>
                            <Button variant="success" type="submit" onClick={(e) => {submit(e)}}>
                                Войти
                            </Button>
                            {showError === true & tryIt === true ? <AlertComponent error={authState.error} doing="входе"/> : <></>}
                    </Form>
                </CardStyled>
            </Row>
        </Container>
    )
}