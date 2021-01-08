import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5000/api/baby"
})


export const babyAPI = {
    getBaby: () => {
        return instance.get('/', {headers: {
            Authorization: localStorage.getItem('token')
        }})
    }
}