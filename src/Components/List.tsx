import * as React from 'react';
import { AutoComplete } from 'antd'

  
 export const ListAll = ({otherProps,datas}:any) => {
    const [config, setConfig] = React.useState({ itemValue:"", itemName:"" })
    const [loaded,setLoaded] = React.useState(false)

    if(!loaded){
        switch (otherProps.Type) {
            case 'clients':
                setConfig({ itemValue:"ID", itemName:"Raison_Sociale" })
                break
            case 'dossiers':
                setConfig({ itemValue:"ID", itemName:"Intitule" })
                break
            case 'domaines':
                setConfig({ itemValue: "", itemName: "" })
                break
            case 'collaborateurs' :
                setConfig({ itemValue:"ID", itemName:"Nom"})
                break
            case 'diligences' :
                setConfig({ itemValue:"ID", itemName:"Dossier"})
                break
            default:
                break
          }
          setLoaded(true)
    }
    return <>
    
    <AutoComplete 
      dataSource={datas}  
      allowClear={true} 
      filterOption={(inputValue, option:any) => option.otherProps.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
      backfill
    >
        {config.itemName != "" && datas.map((data:any, index:number) =>{
            return(
                
            <AutoComplete.Option key={index}>
                { data[config.itemName] }
            </AutoComplete.Option>
            )}
         ) }
    
    </AutoComplete>
    
    </>
  }