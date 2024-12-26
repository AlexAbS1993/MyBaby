import {babyAPI} from '../api/baby'

const initialState = {
    firstName: "",
    secondName: "",
    thirdName: "",
    birthDate: "",
    statusFamily: "",
    photos: [],
    siblings: [],
    photo: "",
    fake: 1
}

const GET_BABY = "GET_BABY"

export const babyReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BABY: {
            let photo
            if (action.data.firstName === 'Валентин'){
                photo = "http://localhost:5000/uploads/1609558997696mPDR-Iv5wEk.jpg"
            }
            else{ 
                photo = "http://localhost:5000/uploads/inna.jpg"
            }
            return {
                ...state,
                photo,
                ...action.data
            }
        }
        case "NULLIFY": {
            return {
                ...initialState
            }
        }
        default: return state
    }
}

const getBabyAC = (data) => {return {type: GET_BABY, data}}
export const nullifyBaby = () => {
    return {type: "NULLIFY"}}
export const getBaby = (name) => async(dispatch) => {
    const response = await babyAPI.getBaby(name)
    if (response.status === 200){
        dispatch(getBabyAC(response.data))
    }
} 