import 'antd/dist/antd.css'
import { Domaines, Collaborateurs, Diligences, Dossiers, Clients } from './Get.story'
import * as React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Kavoa', module)
    .add('Main View', () => <p>Main View mdr</p>)

storiesOf('HTTP GET', module)
    .add('domaines', () => <Domaines/>)
    .add('dossiers', () => <Dossiers/>)
    .add('diligences', () => <Diligences/>)
    .add('collaborateurs', () => <Collaborateurs/>)
    .add('clients', () => <Clients/>)