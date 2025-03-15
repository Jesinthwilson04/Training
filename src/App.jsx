import React from 'react';
import {createRoot} from 'react-dom/client';
import Main from './components/Maincomponent.jsx';
import Header from './components/Header.jsx';
import './main.css';

const root=createRoot(document.getElementById("root"))
root.render(
    <div className='body'>
        <Header/>
        <Main/>
    </div>
)