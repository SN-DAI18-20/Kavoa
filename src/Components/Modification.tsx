import * as React from 'react'
import { Card, Button, Input,DatePicker, TimePicker } from 'antd';
import { DiligencesInterface } from '../utils/interfaces';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Lazy } from '../utils/Lazy';
import { Get, Post } from '../utils/api';
const { useState } = React
interface props {
    datas: DiligencesInterface
}

export const Modification = (props:props) => {
    return <DiligenceForm datas={props.datas} />
    // return <Lazy promise={Get('diligences')} Component={DiligenceForm} />
}
const { TextArea } = Input;
const useStyle = makeStyles({
    pannel:{
        display:'flex',
        flexDirection:'column',
        margin:'1%'
        
    },
    mainView:{
        display:'flex',
        flexDirection:'row',
        width:'auto',
        height: '100%'
    },
    label:{
        margin:' 0 20px 20px 0'
    },
    input:{
        width:'200%',
        margin:' 0 8px 8px 0'
    },
    textarea:{
        maxwidth:'378px!important'
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

    const sendData=() => {
        setAllData({Collaborateur:collaborateur, DateCourses: dateCourses, Detail: detail, Dossier: dossier, Heure_TotalDecimal: tempsTotal,ID: props.datas.ID})
        console.log(allData)
        Post('testposting',{diligences:allData}).then(e => console.log(e.status))
    }

    return<Card style={{height:'100%', display:'flex', flexDirection:'column'}}>
        <h2>Modification</h2>
        <div className={classe.mainView} >
        <div className={classe.pannel} >
                <label className={classe.label} htmlFor='date'>Date: </label>
                <label className={classe.label} htmlFor="dossier">Dossier: </label>
                <label className={classe.label}  htmlFor="collaborateur">Collaborateur: </label>
                <label className={classe.label} htmlFor="heure">Temps passé: </label>
                <label className={classe.label} htmlFor="detail">Details: </label>

        </div>
        <div className={classe.pannel} >
                <DatePicker className={classe.input} id='date' name='date' defaultValue={moment(dateCourses, 'YYYY-MM-DD')} onChange={(el:any) => setDateCourses(el.target.value)} placeholder='Date'/>
                <Input className={classe.input} type='text'   value={dossier} onChange={(el:any) => setDossier(el.target.value)} placeholder='Dossier' />
                <Input className={classe.input} type='text' value={collaborateur} onChange={(el:any) => setCollaborateur(el.target.value)} placeholder='Collaborateur'/>
                <TimePicker className={classe.input} format='HH:mm' defaultValue={moment(`${heureTotal}:${minuteTotal}`,'HH:mm')} onChange={e => setTempsTotal(`${e.hour()},${e.minute()}`)}/>
                <Input.TextArea className={classe.textarea} value={detail} onChange={(el:any) => setDetail(el.target.value)} placeholder='Detail' />
        </div>
            </div>
            <Button type="primary"  style={{"margin":"1%"}} onClick={() => sendData()} >Valider</Button>
    </Card>
}