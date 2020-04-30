import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
//TODO:
import Userprovider from './providers/Userprovider';
import Tutorprovider from './providers/Tutorprovider';
import Studentprovider from './providers/Studentprovider';

ReactDOM.render(
<Userprovider>  
    <Tutorprovider>
        <Studentprovider>
            <App/>
        </Studentprovider>
    </Tutorprovider>
</Userprovider>
,
document.getElementById('root'));

