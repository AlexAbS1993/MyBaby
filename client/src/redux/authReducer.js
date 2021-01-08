import {authAPI} from './api/auth'

const SET_ERROR = "SET_ERROR"
const SET_USER  = "SET_USER"
const SET_INIT = "SET_INIT"
const LOG_OUT = "LOG_OUT"
const SET_LOGIN = "SET_LOGIN"

const initialState = {
    login: "",
    statusFamily: "",
    status: "",
    isAuth: false,
    initialized: false,
    isLoading: false,
    error: "",
    _id: ""
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ERROR: {
            return {
                ...state, 
                error: action.error
            }
        }
        case SET_USER: {
            const token = action.data.token
            localStorage.setItem("token", token)
            const {login, status, statusFamily, _id} = action.data
            return {
                ...state,
                isAuth: true,
                login, status, statusFamily, _id,
                error: "Success",
                
            }
        }
        case SET_INIT: {
            return {
                ...state,
                initialized: action.value
            }
        }
        case LOG_OUT: {
            localStorage.removeItem('token')
            return {
                ...initialState,
                initialized: true
            }
        }
        case SET_LOGIN: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
                error: "Success"
            }
        }
        default: return state
    }
}

export const setError = (error) => {return {type: SET_ERROR, error}}
const setUser = (data) => {return {type: SET_USER, data}}
const setInitialized = (value) => {return {type: SET_INIT, value}}
const setLog = (data) => {return {type: SET_LOGIN, data}}

export const logOut = () => {
    return{type: LOG_OUT}
}

export const logIn = (data) => async (dispatch) => {
    try{
    const response = await authAPI.login(data)
    if (response.status === 200){
        dispatch(setUser(response.data))
        dispatch(setInitialized(true))
    }}
    catch(e){
        const message = e.response ? e.response.data.message : "Сервер не отвечает"
        dispatch(setError(message))
    }
}

export const signUp = (data) => async (dispatch) => {
    try{
        await authAPI.registration(data)
        dispatch(setError("Success"))
    }
    catch(e){
        const message = e.response ? e.response.data.message : "Сервер не отвечает"
        dispatch(setError(message))
    }
}

export const setLogin = () => async (dispatch) => {
    try{
        const response = await authAPI.getLogin()
        if (response.status === 200){
            dispatch(setLog(response.data))   
        }
    }
    catch(e){
        const message = e.response ? e.response.data.message : "Сервер не отвечает"
        dispatch(setError(message))
    }
    finally{
        dispatch(setInitialized(true)) 
    }
}