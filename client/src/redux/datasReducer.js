import {datesAPI} from './api/dates'

const initialState = {
    dates: [],
    countOfDates: null,
    currentPage: 1,
    error: ""
}

const GET_DATES = 'GET_DATES'
const RESET = 'RESET'
const SET_CURRENT = 'SET_CURRENT'
export const datasReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DATES: {
            return {
                ...state,
                dates: [...action.data.dates],
                countOfDates: action.data.countOfDates
            }
        }
        case "RESET": {
            return {
                ...initialState
            }
        }
        case SET_CURRENT: {
            return {
                ...state,
                currentPage: action.skip
            }
        }
        default: return state
    }
}

const getDatesAC = (data) => {return {type: GET_DATES, data}} 

export const getDatesThunk = (skip) => async (dispatch) => {
    const response = await datesAPI.getDates(skip)
    if (response.status === 200){
        dispatch(getDatesAC(response.data))
        dispatch({type: SET_CURRENT, skip})
    }
}

export const createDateThunk = (data) => async (dispatch) => {
    await datesAPI.createDate(data.datas)
    await dispatch(getDatesThunk(data.currentPage))
}
