import * as React from 'react';

import { Card } from 'antd'

import { Lazy } from '../utils/Lazy'
import { TableAll } from '../Components/Table';

import { Get } from '../utils/api';

const valueOf = (table:Array<string>, search:string ) => table[ table.indexOf(search) + 1 ]
const cookieTable = document.cookie.split(';').toString().split('=').toString().split(',').map((table:string) => table.trim())
console.log(cookieTable)
export const HomePage = () => {
<<<<<<< Updated upstream
=======
    // console.log("blabla")
    // const [diligence, setDiligence]= React.useState<Array<ClientsInterface>>([]);
    // if(diligence)Get('diligences').then(({data}:any) => {
    //     console.log('is this a pb?')
    //     let temp = [];
    //     for (let i = 0; i < 5; i++){
    //         temp.push(data[i]);
    //         console.log(data[i]);
    //     }
    //     setDiligence(temp)
    // })
    // console.log('diligence : '+  {diligence});


    // const [client, setClient]= React.useState<Array<ClientsInterface>>([]);
    // if(!client)Get('clients').then(({data}:any) => {
    //     let temp = [];
    //     for (let i = 0; i < 5; i++){
    //         temp.push(data[i]);
    //         console.log(data[i]);
    //     }
    //     setClient(temp);

    // })
    // console.log('client : '+  {client});


    // const [dossier, setDossier]= React.useState<Array<ClientsInterface>>([]);
    // if(!dossier)Get('dossiers').then(({data}:any) => {
    //     let temp = [];
    //     for (let i = 0; i < 5; i++){
    //         temp.push(data[i]);
    //         console.log(data[i]);
    //     }
    //     setDossier(temp);
    // })
    // console.log('dossier : '+  {dossier});


>>>>>>> Stashed changes
    return(
        <div style={{display:'flex', alignContent:'center', justifyContent:'center'}} >
            <div style={{flexDirection:'column', display:'flex'}}>
            <h1>Bienvenue {valueOf(cookieTable, 'nom')} {valueOf(cookieTable, 'prenom')} </h1>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                <Card>
                    Diligence
                    <Lazy otherProps={{Type:'diligences'}} Component={Tableau} promise={Get("diligences")} />
                </Card>
                <Card>
                    Dossiers
                    <Lazy otherProps={{Type:'dossiers'}} Component={Tableau} promise={Get('dossiers')} />
                </Card>
                <Card>
                    Clients
                    <Lazy otherProps={{Type:'clients'}} Component={Tableau} promise={Get('clients')} />
                </Card>
                </div>
            </div>
        </div>
    )
}

const Tableau = ({datas,otherProps}:any) => {
    const data = [];
    for (let i = 0; i < 5; i++){
        data.push(datas[i]);
    }
    console.log(data);
    return (
        <TableAll datas={data} otherProps={otherProps} />
    )
}