import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
//TODO:
import Userprovider from './providers/Userprovider';
import Tutorprovider from './providers/Tutorprovider';
ReactDOM.render(
<Userprovider>
    <Tutorprovider>
        <App/>
    </Tutorprovider>
</Userprovider>
,
document.getElementById('root'));

