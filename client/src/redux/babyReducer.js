import {babyAPI} from './api/baby'

const initialState = {
    firstName: "",
    secondName: "",
    thirdName: "",
    birthDate: "",
    statusFamily: "",
    photos: [],
    siblings: [],
    photo: "http://localhost:5000/uploads/1609558997696mPDR-Iv5wEk.jpg",
    fake: 1
}

const GET_BABY = "GET_BABY"

export const babyReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BABY: {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state
    }
}

const getBabyAC = (data) => {return {type: GET_BABY, data}}

export const getBaby = () => async(dispatch) => {
    const response = await babyAPI.getBaby()
    if (response.status === 200){
        dispatch(getBabyAC(response.data))
    }
} 