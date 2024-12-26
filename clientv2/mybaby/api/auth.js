import axios from 'axios'
import config from '@/config/config'

const instance = axios.create({
    baseURL: `http://${config.serverIP}:5000/api/auth`
})


export const authAPI = {
    login: (data) => {
        return instance.post('/login',{...data})
    },
    registration: (data) => {
        return instance.post('/registration', {...data})
    },
    getLogin: () => {
        return instance.get('/login', { headers: {
            Authorization: localStorage.getItem('token')
        }       
        })
    }
}