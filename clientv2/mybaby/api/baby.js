import axios from 'axios'
import config from '@/config/config'

const instance = axios.create({
    baseURL: `http://${config.serverIP}:5000/api/baby`
})


export const babyAPI = {
    getBaby: (name) => {
        return instance.get(`/?name=${name}`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
    }
}