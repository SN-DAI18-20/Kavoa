import * as React from 'react'
import { Button } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const Connection = (props:any) => {
    const [connected,setConnected] = React.useState(false)
    const tryToConnect = () => {
        setConnected(true)
        localStorage.setItem('connected', 'true')
    }
    return (
    <div>
   <Router>
        <Link to='/home'>{ !connected ?<Button type='primary' onClick={() => tryToConnect() }>Link</Button> : <></>}</Link>
        <Route path='/home' ></Route>
    </Router>
    </div>
    )
}