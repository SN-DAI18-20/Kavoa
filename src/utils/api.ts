import axios from 'axios'

const {request} = axios;

const url = 'https://www.api.ap/'

export const Get = (req:string, query:'') => {
    return request({
        method: 'GET',
        url: url + req,
        params: query
    })
}

export const Post = (req:string, body:object) => {
    return request({
        method: 'POST',
        url: url+req,
        data:body
    })
}

export const Patch = () => {

}

export const Delete = () => {

}
