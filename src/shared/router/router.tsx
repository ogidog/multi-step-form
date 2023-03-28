import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "pages/index";
import {Step1Content} from "widgets/index";
import * as React from "react";
import {Step2Content} from "widgets/index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [{
            path: "/step1",
            element: <Step1Content/>
        }, {
            path: "/step2",
            element: <Step2Content/>
        }, {
            path: "/",
            element: <Navigate to="/step1" replace/>
        }]
    }
], {basename: "/"});
