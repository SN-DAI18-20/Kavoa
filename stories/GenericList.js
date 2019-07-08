import * as React from 'react'

import { AutoComplete } from 'antd'

import { Get } from '../src/utils/api'
import { Lazy } from '../src/utils/Lazy'
import { idText } from 'typescript'
import { ListAll } from '../src/Components/List'

export const GenericList = (props) => {
  return <Lazy otherProps={{Type:props.Type}} Component={ListAll} promise={Get(props.Type)} />
}


