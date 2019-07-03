import * as React from 'react';

const ConnectionContext = React.createContext({
    connected: false,
    setConnected: (value:any) => {}
})

export const ConnectionProvider = (props:any) => {
    const [connected,setConnected] = React.useState(false);
    return (
    <ConnectionContext.Provider value={{connected:connected, setConnected:setConnected}}>
        <ConnectionContext.Consumer>
            {props.children}
        </ConnectionContext.Consumer>
    </ConnectionContext.Provider>
    )
}