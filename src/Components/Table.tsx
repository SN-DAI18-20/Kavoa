import * as React from 'react'
import { Table, Input, Button, Icon } from 'antd'
import { Lazy } from '../utils/Lazy';
import { Get } from '../utils/api';
import { ClientsInterface, DossiersInterface, CollaborateursInterface, DiligencesInterface } from '../utils/interfaces'
import { number } from 'prop-types';
import { RouterUtils } from '../utils/Router';
import { ModalView } from './Modal';

let colab = []
export const TableAll = ({otherProps,datas}:any) => {
    const [config, setConfig] = React.useState([{}])
    const [loaded,setLoaded] = React.useState(false)
    const [computedDatas, setComputedDatas] = React.useState([{}])
    const [collaborateurs, setCollaborateurs] = React.useState()
    const [clients, setClients] = React.useState<Array<ClientsInterface>>([])
    const [dossiers, setDossiers] = React.useState<Array<DossiersInterface>>([])
    const [superLoad, setSuperLoad] = React.useState(false)
    const [dataSource, setDataSource] = React.useState([{}]);
    const [modal, setModal] = React.useState(false)
    const [ID, setID] = React.useState()
    const actionConfig = {
        title:'action',
        dataIndex:'action',
        key:'action'
    }

if(!loaded){
        switch (otherProps.Type) {
            case 'clients':
                setConfig([
                    { title:"ID", dataIndex:"ID", key:"ID"},
                    { title:"Raison Sociale", dataIndex:"Raison_Sociale", key:"Raison_Sociale"},
                    { title:"Adresse Siege", dataIndex:"Adresse_Siege", key:"Adresse_Siege"},
                    { title:"CP Siège", dataIndex:"CP_Siège", key:"CP_Siège"},
                    { title:"Ville Siege", dataIndex:"Ville_Siege", key:"Ville_Siege"},
                    actionConfig
                ])
                setDataSource(datas.map((data:any) => ({...data,action:<RouterUtils route={'/dossiers/clients/' + data.ID} > <Button >Voir</Button> </RouterUtils> }) ) )
                setLoaded(true)

                break
            case 'dossiers':
                setConfig([
                    { title:"ID", dataIndex:"ID", key:"ID"},
                    { title:"Client", dataIndex:"Client", key:"Client"},
                    { title:"Domaine", dataIndex:"Domaine", key:"Domaine"},
                    { title:"Intitule", dataIndex:"Intitule", key:"Intitule"},
                    { title:"Responsable", dataIndex:"ResponsableID", key:"ResponsableID"},
                    actionConfig
                ])
                datas.forEach((dossier:DossiersInterface) => {
                    if(dossier.Client != 0 || dossier.ResponsableID != 0){

                        Get("clients", dossier.Client.toString()).then(({data})=>{
                            dossier.Client = data[0].Raison_Sociale
                        })
                        Get("collaborateurs", dossier.ResponsableID.toString()).then(({data})=>{
                            dossier.ResponsableID = data[0].Nom + " " + data[0].Prenom
                        })
                        dossier.action = <RouterUtils route={'/diligences/dossiers/' + dossier.Client} > <Button >Voir</Button> </RouterUtils>
                        dataSource.push(dossier);

                    }else
                    {console.log("error id 0")}
                });
                setDataSource(dataSource)
                setLoaded(true)

                break
            case 'domaines':
                setConfig([{}])
                break
            case 'collaborateurs' :
                setConfig([
                    { title:"ID", dataIndex:"ID", key:"ID"},
                    { title:"Nom", dataIndex:"Nom", key:"Nom"},
                    { title:"Prenom", dataIndex:"Prenom", key:"Prenom"},
                    actionConfig
                ])
                setDataSource(datas)
                setLoaded(true)
                break
            case 'diligences' :
                setConfig([
                    { title:"ID", dataIndex:"ID", key:"ID"},
                    { title:"Collaborateur", dataIndex:"Collaborateur", key:"Collaborateur"},
                    { title:"Dossier", dataIndex:"Dossier", key:"Dossier"},
                    { title:"DateCourses", dataIndex:"DateCourses", key:"DateCourses"},
                    { title:"Heure_TotalDecimal", dataIndex:"Heure_TotalDecimal", key:"Heure_TotalDecimal"},
                    { title:"Detail", dataIndex:"Detail", key:"Detail"},
                    actionConfig
                ])

                datas.forEach((diligence:DiligencesInterface) => {
                    if(diligence.Collaborateur != 0){
                        Get("collaborateurs", diligence.Collaborateur.toString()).then(({data})=>{
                            diligence.Collaborateur = data[0].Nom + " " + data[0].Prenom
                        })
                        diligence.action = <>
                            <RouterUtils route={'/diligence/' + diligence.ID} > <Button >Modifier</Button> </RouterUtils>
                            <Button onClick={() =>{setModal(true)
                                setID(diligence.ID)}} >Supprimer</Button>
                        </>
                        dataSource.push(diligence);
                    }
                })

                setDataSource(dataSource)
                setLoaded(true)
                break
            default:
                break
          }
    }
    return <>
    {
    loaded
        ? <Table
      dataSource={dataSource}
      columns={config}/>
        : <></>
}
    <ModalView value={ID} visible={modal} handleCancel={() => setModal(false)} />
    </>
  }