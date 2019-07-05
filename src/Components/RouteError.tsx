import * as React from 'react'
import { Button } from 'antd';
import { RouterUtils } from '../utils/Router';

import { makeStyles } from '@material-ui/styles'

import avocado from '../assets/avocado-svgrepo-com1.svg'

const useStyle = makeStyles({
    mainPannel:{
        height:'100%',
        display:'flex',
        justifyContent:'center'
    },
    pannel:{
        display:'flex',
        height: '50%',
        justifyContent:'center',
        justifyItems:'center',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center'
    }
})


export const RouteError = () => {
    const {mainPannel, pannel} = useStyle();
    return(
        <div className={mainPannel} >
            <div className={pannel} >
                <img src={avocado} height='30%' width='30%' />
            <h1>Ce lien n'existe pas</h1>
            <RouterUtils route=''>
                <Button>Redirection vers l'accueil</Button>
            </RouterUtils>
            </div>
        </div>
    )
}