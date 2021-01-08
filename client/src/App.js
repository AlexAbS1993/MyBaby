import {Redirect, Route} from 'react-router-dom'
import {Menu} from './components/Menu/Menu'
import {Login} from './components/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registration } from './components/Login/Registration';
import { Main } from './components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react'
import {setLogin} from './redux/authReducer'
import { Phrases } from './components/Phrases/Phrases';
import { Dates } from './components/Datas/Dates';
import { Photos } from './components/Photos/Photos';

function App() {
  const authState = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLogin())
  }, [])


  return (
   <> {authState.initialized ? <>
    <header style={{"marginBottom": "40px" }}>
      <Menu />
    </header>
    <div>
        <Route path="/login" render={() => {return <Login />}} />
        <Route path='/registration' render={() => {return <Registration />}} />
        <Route path="/" exact render={() => {return <Redirect to="/main" />}} />
        <Route path="/main" exact render={() => {return <Main />}} />
        <Route path="/phrases" exact render={() => {return <Phrases />}} />
        <Route path="/dates" exact render={() => {return <Dates />}} />
        <Route path='/photos' exact render={() => {return <Photos />}} />
    </div>
    </> : <></>} </>
  );
}

export default App;
