import 'antd/dist/antd.css'
import { Domaines, Collaborateurs, Diligences, Dossiers, Clients } from './Get.story'
import { Modification } from '../src/Components/Modification'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginStory } from './Login.story'
import { GenericList } from './GenericList.js'
import { Lazy } from '../src/utils/Lazy';
import { Get } from '../src/utils/api';
import { ClientList } from '../src/Components/ClientList';
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

storiesOf('Generic list', module)
    .add('GenericList Domaine', () => <GenericList Type="domaines"/>)
    .add('GenericList Client', () => <GenericList Type="clients"/>)
    .add('GenericList Client', () => <GenericList Type="clients"/>)
    .add('GenericList Client', () => <GenericList Type="clients"/>)

const fakeTableData = {
    ID:123,
    Raison_Sociale:'ma maison',
    Adresse_Siege:'truc',
    CP_Siège:'on sen fiou',
    Ville_Siege:'la aussi on sen fou'
}

storiesOf('ClientList', module)
    .add('tableau with request',() => <Lazy Component={ClientList} promise={Get('clients')} />)
    .add('tableau without request',() => <ClientList datas={fakeTableData} />)

storiesOf('HTTP GET', module)
    .add('domaines', () => <Domaines/>)
    .add('dossiers', () => <Dossiers/>)
    .add('diligences', () => <Diligences />)
    .add('collaborateurs', () => <Collaborateurs/>)
    .add('clients', () => <Clients/>)