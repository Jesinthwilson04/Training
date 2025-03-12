import React from "react";
import {createRoot} from "react-dom/client";
import './main.css';

const root=createRoot(document.getElementById("root"));
function Header(){
    return(
        <header>
            <img src="/react.svg" alt="react logo" width="40px"/>
        </header>
    );
}
function Body()
{
    return(
        <h1>
            This is sample page for the learning purpose
        </h1>
    );
}
function Footer(){
    return(
        <footer>
            ©️ 2024 Jesinthwilson development.All rights reserved.
        </footer>
    );
}



root.render(
    <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
    
);