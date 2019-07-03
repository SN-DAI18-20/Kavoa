import * as React from 'react'
import { Button, Card, Input } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const Login = (props:any) => {
    console.log("props login",props)
    const tryToConnect = () => {
        props.setConnection(true)
        localStorage.setItem('connected', 'true')
    }
    return (
    <div style={{height:'100vh', width:'100vw', justifyContent:'center', alignItems:'center', display:'flex'}} >
            <Card title='Connexion' style={{width:400}} >
                <Input placeholder='Nom' style={{marginBottom:10}} />
                <Input placeholder='Mot de passe' style={{marginBottom:10}} />
                <div style={{justifySelf:'center', display:'flex'}} >
                    <Router>
                        <Link to='/home'>{ !props.connection ?<Button type='primary' onClick={() => tryToConnect() }>Link</Button> : <></>}</Link>
                        <Route path='/home' ></Route>
                    </Router>
                </div>
            </Card>
    </div>
    )
}