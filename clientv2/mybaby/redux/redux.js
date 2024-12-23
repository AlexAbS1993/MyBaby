import {applyMiddleware, combineReducers, createStore} from 'redux'
import { thunk } from 'redux-thunk'
import {authReducer} from './authReducer'
import { babyReducer } from './babyReducer'
import { datasReducer } from './datasReducer'
import { phrasesReducer } from './phrasesReducer'
import {photoReducer} from './photoReducer'

const reducers = combineReducers({
    auth: authReducer,
    phrases: phrasesReducer,
    dates: datasReducer,
    baby: babyReducer,
    photos: photoReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
