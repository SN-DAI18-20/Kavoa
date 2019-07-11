import * as React from 'react';

import { Card } from 'antd'

const valueOf = (table:Array<string>, search:string ) => table[ table.indexOf(search) + 1 ]
const cookieTable = document.cookie.split(';').toString().split('=').toString().split(',').map((table:string) => table.trim())
console.log(cookieTable)
export const HomePage = () => {
    return(
        <div style={{display:'flex', alignContent:'center', justifyContent:'center'}} >
            <div style={{flexDirection:'column', display:'flex'}}>
            <h1>Bienvenue {valueOf(cookieTable, 'nom')} {valueOf(cookieTable, 'prenom')} </h1>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                <Card>
                    Diligence
                </Card>
                <Card>
                    Dossiers
                </Card>
                </div>
            </div>
        </div>
    )
}