import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navegation from './components/Navegation'
import RouteApp from "./routes/RouteApp";


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navegation/>
        <RouteApp />
        <App/>
    </BrowserRouter>
    
)