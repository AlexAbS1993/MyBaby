import {phrasesAPI} from '../api/phrases'
// import {authAPI} from './api/auth'

const initialState = {
    phrases: [],
    isLoading: false,
    currentPage: 1,
    countOfPhrases: null
}

const SET_LOADING = "SET_LOADING"
const SET_PHRASES = "SET_PHRASES"
const SET_CURRENT = "SET_CURRENT"

export const phrasesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.value
            }
        }
        case SET_PHRASES: {
            return {
                ...state,
                phrases: action.data.phrases,
                countOfPhrases: action.data.count
            }
        }
        case SET_CURRENT: {
            return {
                ...state, 
                currentPage: action.skip
            }
        }
        default: {
            return state
        }
    }
}

const setIsLoading = (value) => {return {type: SET_LOADING, value}}
const setPhrases = (data) => {return {type: SET_PHRASES, data}}
const setCurrentPage = (skip) => {return {type: SET_CURRENT, skip}}

export const getPhrases = (skip) => async (dispatch) => {
    try{
        dispatch(setIsLoading(true))
        const response = await phrasesAPI.getPhrases(skip)
    if (response.status === 200){
        dispatch(setPhrases(response.data))
        dispatch(setCurrentPage(skip))
    }
    }
    catch(e){
        console.log(e)
    }
    finally{
        dispatch(setIsLoading(false))
    }
}

export const createPhrase = (data) => async (dispatch) => {
    try{
        dispatch(setIsLoading(true))
        const response = await phrasesAPI.createPhrases(data.datas)
        if (response.status === 200){
        dispatch(getPhrases(data.currentPage))
        }
    }
    catch(e){
    console.log(e)
    }
    finally{
        dispatch(setIsLoading(false))
    }
   
}

export const addComm = (data) => async (dispatch) => {
    try{
        dispatch(setIsLoading(true))
        const response = await phrasesAPI.commentary({value: data.datas, id: data.id, auth: data.auth})
        if (response.status === 200){
        dispatch(getPhrases(data.currentPage))
        }
    }
    catch(e){
    console.log(e)
    }
    finally{
        dispatch(setIsLoading(false))
    }
   
}

export const changePhraseThunk = ({phrase, currentPage, _id}) => async (dispatch) => {
    console.log(phrase, _id)
    const response = await phrasesAPI.changePhrases({phrase, _id})
    if (response.status === 200){
        dispatch(getPhrases(currentPage))
    }
}