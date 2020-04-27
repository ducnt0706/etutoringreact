import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
//TODO:
import Userprovider from './providers/Userprovider';
ReactDOM.render(
<Userprovider>
    <App/>
</Userprovider>
,
document.getElementById('root'));

