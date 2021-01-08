import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5000/api/photos"
})


export const photosAPI = {
    getPhoto: (skip) => {
        return instance.get(`/?skip=${skip}`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
    },
    setPhoto: (data) => {
        const bodyFormData = new FormData()
        bodyFormData.append("image", data)
        return instance.post('/create', bodyFormData, {headers: {
            Authorization: localStorage.getItem('token'),
            'content-type': `multipart/form-data`
        }})
    }
}