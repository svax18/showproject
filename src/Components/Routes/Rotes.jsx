import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";

const router = createBrowserRouter({
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/home",
            element:<Home></Home>
        }
    ]
})

export default router;