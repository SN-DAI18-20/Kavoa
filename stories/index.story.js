import 'antd/dist/antd.css'
import { Domaines, Collaborateurs, Diligences, Dossiers, Clients } from './Get.story'
import { Modification } from '../src/Components/Modification'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginStory } from './Login.story';

storiesOf('Kavoa', module)
    .add('Main View', () => <p>Main View mdr</p>)

storiesOf('Login View', module)
    .add('Not connected', () => <LoginStory />)

const diligences = {
    Collaborateur: 38,
    DateCourses: "2019-04-30T22:00:00.000Z",
    Detail: "Finalisation mémo.",
    Dossier: 16188,
    Heure_TotalDecimal: 3.23,
    ID: 154358
}

storiesOf('Modification View', module)
    .add('No data', () => <Modification datas={diligences} />)

storiesOf('HTTP GET', module)
    .add('domaines', () => <Domaines/>)
    .add('dossiers', () => <Dossiers/>)
    .add('diligences', () => <Diligences />)
    .add('collaborateurs', () => <Collaborateurs/>)
    .add('clients', () => <Clients/>)