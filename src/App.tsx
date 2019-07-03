import * as React from 'react'

import { Connection } from './Pages/Connection'
import { ContentWrapper } from './Pages/ContentWrapper';

export const App = () => localStorage.getItem('connected') === 'false' ? <Connection/> : <ContentWrapper/>