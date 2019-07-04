import * as React from 'react'
import { Card, Button, Input, DatePicker, TimePicker } from 'antd';
import { DiligencesInterface } from '../utils/interfaces';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Lazy } from '../utils/Lazy';
import { Get } from '../utils/api';
const { useState } = React
interface props {
    datas: DiligencesInterface
}

export const Modification = (props:props) => {
    return <DiligenceForm datas={props.datas} />
    // return <Lazy promise={Get('diligences')} Component={DiligenceForm} />
}

const useStyle = makeStyles({
    truc:{
        height:'100%'
    }
})

const DiligenceForm = (props:props) => {

    const classe = useStyle()

    const { datas } = props;
    const { Collaborateur, DateCourses, Detail, Dossier, Heure_TotalDecimal } = datas;
    const [collaborateur, setCollaborateur] = useState(Collaborateur)
    const [dateCourses, setDateCourses] = useState(DateCourses.split('T')[0])
    const [detail, setDetail] = useState(Detail)
    const [dossier, setDossier] = useState(Dossier)
    const [heureTotal] = useState(Heure_TotalDecimal.toString().split('.')[0])
    const [minuteTotal] = useState(Heure_TotalDecimal.toString().split('.')[1])
    const [tempsTotal, setTempsTotal] = useState()

    const [allData, setAllData] = useState(datas)

    return<Card className={classe.truc} >
            <div style={{display: 'flex', flexDirection: 'row'}} >
                <label htmlFor='date'>Date: </label>
                <DatePicker id='date' name='date' defaultValue={moment(dateCourses, 'YYYY-MM-DD')} onChange={(el:any) => setDateCourses(el.target.value)} placeholder='Date'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}} >
                <label htmlFor="dossier">Dossier: </label>
                <Input type='text' value={dossier} onChange={(el:any) => setDossier(el.target.value)} placeholder='Dossier' />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}} >
                <label htmlFor="collaborateur">Collaborateur: </label>
                <Input type='text' value={collaborateur} onChange={(el:any) => setCollaborateur(el.target.value)} placeholder='Collaborateur'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}} >
                <label htmlFor="heure">Temps passé: </label>
                <TimePicker format='HH:mm' defaultValue={moment(`${heureTotal}:${minuteTotal}`,'HH:mm')} onChange={e => setTempsTotal(`${e.hour()},${e.minute()}`)}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}} >
                <label htmlFor="detail">Details: </label>
                <Input.TextArea value={detail} onChange={(el:any) => setDetail(el.target.value)} placeholder='Detail' />
            </div>
            <Button onClick={() => setAllData({Collaborateur:collaborateur, DateCourses: dateCourses, Detail: detail, Dossier: dossier, Heure_TotalDecimal: tempsTotal,ID: props.datas.ID})} >Valider</Button>
    </Card>
}