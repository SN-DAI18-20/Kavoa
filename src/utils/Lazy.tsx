import * as React from 'react';

import { Spin, Icon } from 'antd';
import { AxiosPromise } from 'axios';
import { ReactComponentLike } from 'prop-types';

interface props {
    promise: AxiosPromise,
    Component:ReactComponentLike,
    children?: any,
    size?:number,
    style?:React.CSSProperties
}

export const Lazy = (props:props) => {
    const {promise, Component,size,style} = props
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
                ?<div style={style ? style : {display:'flex', margin: 20} } > <Spin indicator={<Icon type='loading' spin style={{fontSize: size ? size : 30}} />} /></div>
                : value !== undefined ? <Component datas={value} /> : <></>
        }
        </>
    )
}