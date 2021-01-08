import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5000/api/phrases"
})


export const phrasesAPI = {
    getPhrases: (skip) => {
        return instance.get(`/?skip=${skip}`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
    },
    createPhrases: (data) => {
        return instance.post('/create', {...data}, {headers: {
            Authorization: localStorage.getItem('token')
        }})
    },
    changePhrases: (data) => {
        return instance.patch('/change', {...data}, {headers: {
            Authorization: localStorage.getItem('token')
        }} )
    },
    commentary: (data) => {
        return instance.post('/addcomment', {...data},{headers: {
            Authorization: localStorage.getItem('token')
        }} )
    }
}