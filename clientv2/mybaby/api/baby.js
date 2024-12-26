import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5000/api/baby"
})


export const babyAPI = {
    getBaby: (name) => {
        return instance.get(`/?name=${name}`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
    }
}