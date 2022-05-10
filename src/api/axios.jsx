

import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-type': 'application/json'
    }
})

const base_ulr = 'infos'

const Api = {
    getAll(param) {
        const ulr = `${base_ulr}`
        return axiosBase.get(ulr, { param })
    },
    get(id) {
        const ulr = `${base_ulr}/${id}`
        return axiosBase.get(ulr)
    },
    post(data) {
        const ulr = `${base_ulr}`
        return axiosBase.post(ulr, data)
    },
    patch(id, data) {
        const ulr = `${base_ulr}/${id}`
        return axiosBase.patch(ulr, data)
    },
    delete(id) {
        const ulr = `${base_ulr}/${id}`
        return axiosBase.delete(ulr)
    }
}
export default Api;



// import axios from "axios";


// const axiosBase = axios.create({
//     baseURL: "http://localhost:3000/",
//     headers: {
//         'Content-type': 'application/json'
//     },
// })

// const base_ulr = "infos"

// const Api = {
//     getAll(params){
//         const ulr = `${base_ulr}`
//         return axiosBase.get(ulr,{params})
//     },
//     get(id){
//         const ulr = `${base_ulr}/${id}`
//         return axiosBase.get(ulr)
//     },
//     post(data){
//         const ulr = `${base_ulr}`
//         return axiosBase.post(ulr, data)
//     },
//     patch(id, data){
//         const ulr = `${base_ulr}/${id}`
//         return axiosBase.patch(ulr, data)
//     },
//     delete(id){
//         const ulr = `${base_ulr}/${id}`
//         return axiosBase.delete(ulr)
//     }
// }
// export default Api;


