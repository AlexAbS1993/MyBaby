import {photosAPI} from '../api/photos'

const initialState = {
    photos: [],
    countOfphoto: null,
    currentPage: 1,
    currentPhoto: 0
}
 
const GET_PHOTOS = "GET_PHOTOS"
const SET_CUR_PH = "SET_CUR_PH"
const SET_CUR_PG = "SET_CUR_PG"

export const photoReducer = (state = initialState, action) => {
    switch (action.type){
        case "RESET":{
            return {
                ...initialState
            }
        }
        case GET_PHOTOS: {
            return {
                ...state,
                photos: [...action.data.photos],
                countOfphoto: action.data.count
            }
        }
        case SET_CUR_PH: {
            return {
                ...state,
                currentPhoto: action.index
            }
        }
        case SET_CUR_PG: {
            return {
                ...state,
                currentPage: action.skip
            }
        }
        default: return state
    }
}

const getPhotos = (data) => {return {type: GET_PHOTOS, data}} 

export const setCurrent = (index) => {return {type:SET_CUR_PH, index}}
export const setCurrentPage = (skip) => {return {type:SET_CUR_PG, skip}}

export const getPhotoThunk = (skip) => async (dispatch) => {
    const response = await photosAPI.getPhoto(skip)
    if (response.status === 200){
        dispatch(getPhotos(response.data))
    }
}

export const setPhotoThunk = (data) => async (dispatch) => {
    await photosAPI.setPhoto(data)
    dispatch(getPhotoThunk(1))
}