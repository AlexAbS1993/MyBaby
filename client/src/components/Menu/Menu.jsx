import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container, Button} from 'react-bootstrap'
import { ReglogStyled, TitleStyled, LinkStyled} from '../../styled/styled'
import { useDispatch, useSelector } from 'react-redux'
import {logOut} from '../../redux/authReducer'
import '../../App.css'

export const Menu = () => {
    const authstate = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
 <Navbar bg="dark" expand="lg" className="text-light" variant="dark" >
      <Container fluid="md">
  <Navbar.Brand><TitleStyled to={authstate.isAuth ? "/photos" : "/login"}>Наш Валентин</TitleStyled></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
    <Nav className="mr-5">
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled to='/main' authstate={authstate} activeClassName="activeS">Главная страница</LinkStyled></Nav.Link>
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled to='/photos' authstate={authstate} activeClassName="activeS">Фотографии</LinkStyled></Nav.Link>
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled to='/phrases' authstate={authstate} activeClassName="activeS">Фразы</LinkStyled></Nav.Link>
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled to='/dates' authstate={authstate} activeClassName="activeS">Даты</LinkStyled></Nav.Link>  
    </Nav>
    <Nav variant='primary'>
      {authstate.isAuth && <Nav.Link as='div'>{authstate.statusFamily} {authstate.login}</Nav.Link>}
     {!authstate.isAuth ? <> <Nav.Link as='div'><ReglogStyled to='/login' activeClassName="activeS">Вход</ReglogStyled></Nav.Link>
      <Nav.Link as='div'><ReglogStyled to='/registration' activeClassName="activeS">Регистрация</ReglogStyled></Nav.Link> </>: <></>}
      {authstate.isAuth && <Button variant='outline-danger' onClick={() => {dispatch(logOut())}}>Выход</Button>}
    </Nav> 
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}