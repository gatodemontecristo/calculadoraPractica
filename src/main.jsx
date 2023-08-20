import React from "react";
import ReactDOM from 'react-dom/client';

import {HelloWorldComp,hola} from './HelloWorldApp';
import BotonStrap from "./butonComponent";

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
         <HelloWorldComp/>
        <BotonStrap/>
    </React.StrictMode>
);