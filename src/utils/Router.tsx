import * as React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface props {
    route:string,
    children?:any
}

export const RouterUtils = (props:props) => {
    const { route } = props
    const LinkRef:any = React.createRef()
    return <span style={{display:'flex', flexDirection:'row', alignItems:'center'}} onClick={() => LinkRef.current.click()}>
        {props.children}
        <Link innerRef={LinkRef} to={route}/>
    </span>
}