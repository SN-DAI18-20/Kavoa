import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'

import { Connection } from './Pages/Connection';
import { ContentWrapper } from './Pages/ContentWrapper';

console.log("cookie",localStorage.getItem('connected'))

ReactDOM.render( localStorage.getItem('connected') === 'false' ? <Connection/> : <ContentWrapper/>, document.getElementById('root'));