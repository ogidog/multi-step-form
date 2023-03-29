import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "pages/index";
import {Step1Form} from "widgets/index";
import {Step2Form} from "widgets/index";
import * as React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [{
            path: "/step1",
            element: <Step1Form/>
        }, {
            path: "/step2",
            element: <Step2Form/>
        }, {
            path: "/",
            element: <Navigate to="/step1" replace/>
        }]
    }
], {basename: "/"});
