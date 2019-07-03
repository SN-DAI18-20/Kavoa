import * as React from 'react';

import { Spin, Icon } from 'antd';
import { AxiosPromise } from 'axios';

interface props {
    promise: AxiosPromise,
    Component:any,
    children?: any,
    size?:number
}

export const Lazy = (props:props) => {
    const {promise, Component,size} = props
    const [promiseStatus,setPromiseStatus] = React.useState()
    const [value,setValue] = React.useState()
    promise
    .then(promise => {
        setPromiseStatus(promise.status)
        setValue(promise.data)
        })
    .catch(err => console.log(err))
    return(
        <>
        {
            promiseStatus !== 200
                ?<div> <Spin indicator={<Icon type='loading' spin style={{fontSize: size ? size : 30}} />} /></div>
                : value !== undefined ? <Component datas={value} /> : <></>
        }
        </>
    )
}