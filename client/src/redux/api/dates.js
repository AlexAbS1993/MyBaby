import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5000/api/dates"
})


export const datesAPI = {
    getDates: (skip) => {
        return instance.get(`/?skip=${skip}`, {headers: {
            Authorization: localStorage.getItem('token')
        }})
    },
    createDate: (data) => {
        let bodyFormData = new FormData()
        bodyFormData.append("image", data.image)
        bodyFormData.append("discription", data.discription)
        bodyFormData.append("date", data.date)
        return instance.post('/create', bodyFormData, {headers: {
            Authorization: localStorage.getItem('token'),
            'content-type': `multipart/form-data`,
        }})
    },
    createDateTest: (data) => {
        return instance.post('/createTest', {...data}, {headers: {
            Authorization: localStorage.getItem('token'),
        }})
    }
}