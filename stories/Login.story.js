import * as React from 'react';
import { Login } from '../src/Pages/Login';

export const LoginStory = () => {
    const [connection, setConnection] = React.useState(false)
    return<>
    <Login connection={false} setConnection={(bool) => setConnection(bool)} />
    {console.log(connection)}
    </>
}