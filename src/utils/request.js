import {BACKEND_ONLINE} from "./const";
import axios from "axios";


export const httpClient = axios.create({
    baseURL: BACKEND_ONLINE,
    // withCredentials: true,
    headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
    }
})


httpClient.interceptors.response.use(r => {
    return r
}, (e) => {
    return {
        message: e.message,
        status: e?.response?.status,
        statusText: e?.response?.statusText,
        success: false
    }
})

export const httpGet = params =>
    httpClient({
        method: 'get',
        ...params
    })

export const httpPost = params =>
    httpClient({
        method: 'post',
        ...params
    })

export const httpPut = params =>
    httpClient({
        method: 'put',
        ...params
    })

export const httpPatch = params =>
    httpClient({
        method: 'patch',
        ...params
    })

export const httpDelete = params =>
    httpClient({
        method: 'delete',
        ...params
    })
