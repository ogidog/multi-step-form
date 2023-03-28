import React from 'react';
import {MainPage} from "../pages/main-page";
import "./css/App.css";
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {router} from "shared/index";

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
