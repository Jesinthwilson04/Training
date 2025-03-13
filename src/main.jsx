import React from "react";
import {createRoot} from 'react-dom/client';
const root=createRoot(document.getElementById("root"));
function Header()
{
    return(
        <h1>Welcome to page chief.</h1>
    )
}
function Page()
{
    return(
        <>
        <Header/>
        <h2>this is subheader</h2>
        <h3>hey folks how are you</h3>
        </>
    );
}
root.render(
    <Page/>
)