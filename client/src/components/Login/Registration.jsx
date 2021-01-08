import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect, useState, useMemo} from 'react'
import {Form, Button, Container, Row} from 'react-bootstrap'
import {CardStyled} from '../../styled/styled'
import { Redirect } from 'react-router-dom'
import {signUp, setError} from '../../redux/authReducer'
import {AlertComponent} from '../tools/Alert'

export const Registration = () => {
    
    // ==Локальные переменные==
    const [redirect, setRedirect] = useState(false)
    const [tryIt, setTry] = useState(false)
    const [showError, setShowError] = useState(false)
    const [datas, setDatas] = useState({login:"", password: "", statusFamily: "", invite: ""})
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)

    const errorMessage = useMemo(() => {return authState.error}, [authState.error])
    // ==Эффекты==
        // Обнуление
        
    const nullify = () => {
        setRedirect(false)
        setDatas({login:"", password: "", statusFamily: "", invite: ""})
        setShowError(false)
        setTry(false)
    }
        // Возврат значений при удалении компонента
        useEffect(() => {
            dispatch(setError(""))
            return nullify()
        }, [])
        // Изменение положения переключателя для проверки корректности регистрации
        
        useEffect(() => {  
            if (errorMessage !== "" & errorMessage !== "Success" & errorMessage != undefined){
              setShowError(true)}
            else {
              setShowError(false)
            }
        }, [errorMessage])

    // Функции изменения стейта и отправки данных
    const changeDatas = (e) => {
        setDatas({...datas, [e.target.name]: e.target.value})
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(signUp(datas))
        setTry(true)
    }

    useEffect(() => {  
        if (errorMessage !== ""){
          setShowError(true)}
    }, [errorMessage])

   // Условия редиректа
    if (authState.isAuth){
        return <Redirect to="/main" />
    }
    if (redirect === true & tryIt === true){
        return <Redirect to="/login" />
    }
    // Отрисовка
    return (
        <Container fluid="lg">
            <Row className="justify-content-center">
            <CardStyled bg="primary">
         <Form  >
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" name="login" value={datas.login} onChange={(e) => {changeDatas(e)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" name="password" value={datas.password} onChange={(e) => {changeDatas(e)}}/>
            </Form.Group>
            <Form.Group controlId="formStatus">
                <Form.Label>Статус</Form.Label>
                <Form.Control type="text" placeholder="Мама/Папа/Дедушка/Бабушка/Тётя" name="statusFamily" value={datas.statusFamily} onChange={(e) => {changeDatas(e)}} />
            </Form.Group>
            <Form.Group controlId="formInvite">
                <Form.Label>Инвайт</Form.Label>
                <Form.Control type="text" placeholder="Секретный инвайт" name="invite" value={datas.invite} onChange={(e) => {changeDatas(e)}} />
            </Form.Group>

  <Button  variant="success" type="submit" onClick={(e) => {submit(e)}} >
    Зарегистрироваться
  </Button>
         {errorMessage !== "Success" & showError === true & tryIt === true ? <AlertComponent error={authState.error} doing="регистрации"/> : <></>}
</Form>
</CardStyled>
</Row>
        </Container>
    )
}