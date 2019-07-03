import * as React from 'react'

import { Login } from './Pages/Login'
import { ContentWrapper } from './Pages/ContentWrapper';

export const App = () => {
    console.log("user connected ?", localStorage.getItem('connected'))
    const [connection,setConnection] = React.useState(false);
    return  localStorage.getItem('connected') === 'false' ? <Login connection={connection} setConnection={(bool:boolean) => setConnection(bool)} /> : <ContentWrapper/>
}