import axios from 'axios'

const {request} = axios;


const url = 'http://104.46.44.90/'

export const Get = (req:'domaines'|'dossiers'|'clients'|'diligences'|'collaborateurs', query?:'') => {
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