"use client"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container, Button} from 'react-bootstrap'
import { ReglogStyled, TitleStyled, LinkStyled} from '../../styled/styled'
import styles from './menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '@/redux/authReducer'


export const Menu = () => {
  const dispatch = useDispatch()
  const authstate = useSelector(state => state.auth)
    return (
 <Navbar bg="dark" expand="lg" className="text-light" variant="dark" >
      <Container fluid="md">
  <Navbar.Brand><TitleStyled href={authstate.isAuth ? "/photos" : "/login"}>Наши дети</TitleStyled></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
    <Nav className="mr-5">
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled href='/main' $isAuth={authstate.isAuth} className={authstate.isAuth ? styles.activeS : ""}>Главная страница</LinkStyled></Nav.Link>
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled href='/photos' $isAuth={authstate.isAuth} className={authstate.isAuth ? styles.activeS : ""}>Фотографии</LinkStyled></Nav.Link>
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled href='/phrases' $isAuth={authstate.isAuth} className={authstate.isAuth ? styles.activeS : ""}>Фразы</LinkStyled></Nav.Link>
      <Nav.Link as='div' disabled={!authstate.isAuth}><LinkStyled href='/dates' $isAuth={authstate.isAuth} className={authstate.isAuth ? styles.activeS : ""}>Даты</LinkStyled></Nav.Link>  
    </Nav>
    <Nav variant='primary'>
      {authstate.isAuth && <Nav.Link as='div'>{authstate.statusFamily} {authstate.login}</Nav.Link>}
     {!authstate.isAuth ? <> <Nav.Link as='div'><ReglogStyled href='/login' >Вход</ReglogStyled></Nav.Link>
      <Nav.Link as='div'><ReglogStyled href='/registration' >Регистрация</ReglogStyled></Nav.Link> </>: <></>}
      {authstate.isAuth && <Button variant='outline-danger' 
      onClick={() => {dispatch(logOut())}}
        >Выход</Button>}
    </Nav> 
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}