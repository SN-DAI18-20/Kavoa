import * as React from 'react'

import { Login } from './Pages/Login'
import { ContentWrapper } from './Pages/ContentWrapper';

export const App = () => {
    const valueOf = (table:Array<string>, search:string ) => table[ table.indexOf(search) + 1 ]
    const cookieTable = document.cookie.split(';').toString().split('=').toString().split(',').map((table:string) => table.trim())

    const [connection,setConnection] = React.useState(valueOf(cookieTable, 'connected') === true.toString());
    connection
        ? document.cookie = 'connected=true'
        : document.cookie = 'connected=false'
        console.table(cookieTable)
    const ConnectionContext = React.createContext({
        connected: connection,
        connect: () => {},
        disconnect: () => {}
    })

    const disconnect = () => {
        setConnection(false)
        console.log("disconnect", connection)
    }

    const connect = () => {
        setConnection(true)
        console.log("connect", connection)
    }
    return <ConnectionContext.Provider value={{connected:connection, disconnect:() => disconnect(), connect:() =>connect()} } >
                <ConnectionContext.Consumer>
                 {({connected, connect, disconnect}) => {
                    console.log("context",connected)
                    return connected
                        ? <ContentWrapper connection={connected} setConnection={() => disconnect() }/>
                        : <Login connection={connected} setConnection={() => connect()} />}}
                </ConnectionContext.Consumer>
            </ConnectionContext.Provider>
}