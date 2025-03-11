import React from "react";
import {createRoot} from "react-dom/client";
const root=createRoot(document.getElementById("root"));
function MyHeader()
{
    return (
        <h1>hello all welcome to the page </h1>
    );
}
function MainContent()
{
    return (
        <p class="paraSample">this is just a sample paragraph </p>
    )
}
root.render(
    <div><MyHeader />;
    <MyHeader />;
    <MainContent />;
    </div>
    
)