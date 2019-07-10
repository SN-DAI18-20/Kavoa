import * as React from 'react'

import { Get } from '../src/utils/api'
import { Lazy } from '../src/utils/Lazy'
import { ListAll } from '../src/Components/List'

export const GenericList = (props) => {
  return <Lazy otherProps={{Type:props.Type}} Component={ListAll} promise={Get(props.Type)} />
}


