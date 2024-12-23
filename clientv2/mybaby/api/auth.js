import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5000/api/auth"
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