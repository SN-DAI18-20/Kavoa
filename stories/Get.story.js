import * as React from 'react'

import { Button } from 'antd'

import { Get } from '../src/utils/api'
import { Lazy } from '../src/utils/Lazy'

export const Domaines = () => {
    const [data,loadData] = React.useState(false);
    return <>
    <Button onClick={() => loadData(true)} >
        Get domaines
    </Button>
    {data ? <Lazy promise={Get('domaines')} Component={({datas}) => {
        return <>{datas.map((data,index) => <p key={index}>{data}</p>)}</>
    }} /> : <></>}
</>
}

export const Dossiers = () => {
    const [data,loadData] = React.useState(false);
    return <>
    <Button onClick={() => loadData(true)} >
        Get dossiers
    </Button>
    {data ? <Lazy promise={Get('dossiers')} Component={({datas}) => {
        const table = []
        for (let index = 0; index < 5; index++) {
            table.push(datas[index])
        }
        return <>
            {
                table.map((data,index) => {
                return <React.Fragment key={index}>
                <p> ID: {data.ID} </p>
                <p> Client: {data.Client} </p>
                <p> Domaine: {data.Domaine} </p>
                <p> Intitule: {data.Intitule} </p>
                <p> ResponsableID: {data.ResponsableID} </p>
                <hr/>
                </React.Fragment>
            })
            }
            </>
    }} /> : <></>}
</>
}

export const Diligences = () => {
    const [data,loadData] = React.useState(false);
    return <>
    <Button onClick={() => loadData(true)} >
        Get diligences
    </Button>
    {data ? <Lazy promise={Get('diligences')} Component={({datas}) => {
            const table = []
            for (let index = 0; index < 5; index++) {
                table.push(datas[index])
            }
        return<>
            {
                table.map((data,index) => {
                    const {ID,Collaborateur,Dossier,DataCourses,Heure_TotalDecimal,Detail} = data;
                    return <React.Fragment key={index} >
                        <p> ID: {ID} </p>
                        <p> Collaborateur: {Collaborateur} </p>
                        <p> Dossier: {Dossier} </p>
                        <p> Data courses: {DataCourses} </p>
                        <p> Heure total decimal: {Heure_TotalDecimal} </p>
                        <p> Detail: {Detail} </p>
                        <hr/>
                    </React.Fragment>
                })
            }
        </>
    }} /> : <></>}
</>
}

export const Collaborateurs = () => {
    const [data,loadData] = React.useState(false);
    return <>
    <Button onClick={() => loadData(true)} >
        Get collaborateurs
    </Button>
    {data ? <Lazy promise={Get('collaborateurs')} Component={({datas}) => {
        const table = []
        for (let index = 0; index < 5; index++) {
            table.push(datas[index])
        }
        return<>
            {
                table.map((data,index) => {
                    const {ID,Nom, Prenom} = data;
                    return <React.Fragment key={index}>
                        <p> ID: {ID} </p>
                        <p> Nom: {Nom} </p>
                        <p> Prenom: {Prenom} </p>
                        <hr/>
                    </React.Fragment>
                })
            }
        </>
    }} /> : <></>}
</>
}

export const Clients = () => {
    const [data,loadData] = React.useState(false);
    return <>
    <Button onClick={() => loadData(true)} >
        Get client
    </Button>
    {data ? <Lazy promise={Get('clients')} Component={({datas}) =>{
        const table = []
        for (let index = 0; index < 5; index++) {
            table.push(datas[index])
        }
        console.log(datas);
        return<>
            {
                table.map((data,index) => {
                    const {ID, Adresse_Siege, CP_Siège, Raison_Sociale, Ville_Siege} = data;
                    return <React.Fragment key={index} >
                        <p> ID: {ID} </p>
                        <p> Adresse Siege: {Adresse_Siege} </p>
                        <p> CP Siège: {CP_Siège} </p>
                        <p> Raison Sociale: {Raison_Sociale} </p>
                        <p> Ville Siege: {Ville_Siege} </p>
                        <hr/>
                    </React.Fragment>
                })
            }
        </>
        }} /> : <></>}
</>
}