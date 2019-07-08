import * as React from 'react'
import { Button, Card, Input } from 'antd';
import { Spin, Icon } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Post } from '../utils/api'

export const Login = (props:any) => {
    console.log("props login",props);
    const [nom, setNom] = React.useState();
    const [mdp, setMdp] = React.useState();
    const [loading, setLoading] = React.useState(false);
    var data = {nom: {nom}, mdp : {mdp}};
    const tryToConnect = () => {
        console.log('try to connect')
        setLoading(true);
        //TODO: modifier la requete de post en fonction de l'api
        Post('connection', data).then(resp => {
            if (resp.status == 200){
                setLoading(false);
                props.setConnection(true);
                document.cookie = "connected=true";
                document.cookie = "nom =" + {nom};
                document.cookie = "id=" + ""; //TODO get id from response 
                //TODO: set cookie expiration
            }else{
                setLoading(false);
                alert("La connexion a échoué.\n Veuillez recommencer.");

            }
        })
    }
    return (
    <div style={{height:'100vh', width:'100vw', justifyContent:'center', alignItems:'center', display:'flex'}} >
            <Card title='Connexion' style={{width:400}} >
                <Input value={nom} placeholder='Nom' style={{marginBottom:10}} onChange={(el) => setNom(el.target.value)} />
                <Input value={mdp} placeholder='Mot de passe' style={{marginBottom:10}} onChange={(el) => setMdp(el.target.value)}/>
                <div style={{justifySelf:'center', display:'flex'}} >
                    <Router>
                        <Link to='/home'>{ !props.connection ?<Button type='primary' onClick={() => tryToConnect() }>Link</Button> : <></>}</Link>
                        {loading ? <Spin indicator={<Icon type='loading' spin style={{fontSize: 30}} />} /> :<></>}
                        <Route path='/home' ></Route>
                    </Router>
                </div>
            </Card>
    </div>
    )
}