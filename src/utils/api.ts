import axios from 'axios'

const {request} = axios;


const url = 'http://104.46.44.90/'

export const Get = (req:'domaines'|'dossiers'|'clients'|'diligences'|'collaborateurs'|'credential', query?:string) => {
    return request({
        method: 'GET',
        url: url + req + '/' + query
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