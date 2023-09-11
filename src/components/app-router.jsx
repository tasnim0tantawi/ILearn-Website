import React from 'react';

import { BrowserRouter, useLocation, Route, Routes, Router } from "react-router-dom";
import Home from '../pages/home';
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

function AppRouter() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;