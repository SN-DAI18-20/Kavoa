import * as React from 'react'

import { Login } from './Pages/Login'
import { ContentWrapper } from './Pages/ContentWrapper';

export const App = () => {
    const [connection,setConnection] = React.useState(false);
    const cookieTable = document.cookie.split(';').toString().split('=').toString().split(',')
    const valueOf = (table:Array<string>, search:string ) => table[ table.indexOf(search) + 1 ]
    return valueOf(cookieTable, 'connected') === 'false'
        ? <Login connection={connection} setConnection={(bool:boolean) => setConnection(bool)} />
        : <ContentWrapper connection={connection} setConnection={(bool:boolean) => setConnection(bool) }/>
}