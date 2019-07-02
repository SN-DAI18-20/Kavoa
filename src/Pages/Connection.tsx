import * as React from 'react'
import { Button } from 'antd';
import { ContentWrapper } from './ContentWrapper';
import { Lazy } from '../utils/Lazy';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SuperLazy = <Lazy promise={fetch('https://pokeapi.co/api/v2/pokemon/ditto/')} Component={ContentWrapper} />

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
        <Route path='/home' component={() => SuperLazy} ></Route>
    </Router>
    </div>
    )
}

const Bonsoir = () => <p>Bonsoir</p>