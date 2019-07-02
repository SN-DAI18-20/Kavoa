import * as React from 'react';

import { Spin, Icon } from 'antd';

interface props {
    promise: Promise<any>,
    children?: any,
    Component:any
}

export const Lazy = (props:props) => {
    const {promise, Component} = props
    const [promiseStatus,setPromiseStatus] = React.useState()
    const [value,setValue] = React.useState()
    promise
    .then(promise => {
        setPromiseStatus(promise.status)
        return promise.json()
        })
    .then(data => setValue(data))
    .catch(err => console.log(err))
    return(
        <>
        {
            promiseStatus !== 200
                ? <Spin indicator={<Icon type='loading' spin style={{fontSize: 24}} />} />
                : <Component props={value} />
        }
        </>
    )
}