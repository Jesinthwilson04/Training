import {React} from "react";
import {createRoot} from "react-dom/client";
import './main.css';

const root=createRoot(document.getElementById("root"));
function Excitement(){
    return(
        <div className="body">
            <h1>why i want to learn react</h1>
            <ol>
                <li>i always love to design</li>
                <li>so i need a platform </li>
                <li>i try to practice in js,css,html</li>
                <li>now i try to upgrade me to industrial level</li>
            </ol>
        </div>
    );
}
root.render(
    <Excitement/>
);