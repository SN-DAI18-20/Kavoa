import * as React from 'react'

import { AxiosPromise } from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Spin, Icon } from 'antd';

interface props {
    route:string,
    children?:any
}

export const RouterUtils = (props:props) => {
    const { route} = props
    const LinkRef:any = React.createRef()
    return <span onClick={() => LinkRef.current.click()}>
        {props.children}
        <Link innerRef={LinkRef} to={`/${route}`}/>
    </span>
}