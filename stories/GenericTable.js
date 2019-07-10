import * as React from 'react'

import { Get } from '../src/utils/api'
import { Lazy } from '../src/utils/Lazy'
import { TableAll } from '../src/Components/Table'

export const GenericTable = (props) => {
  return <Lazy otherProps={{Type:props.Type}} Component={TableAll} promise={Get(props.Type)} />
}