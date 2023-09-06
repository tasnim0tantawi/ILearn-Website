import React from "react";
import {
  BrowserRouter,
  useLocation,
  Route,
  Routes,
  Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import ListOfCourses from "./pages/ListOfCourses";
import MyCourses from "./pages/MyCourses";
import SeeMore from "./pages/SeeMore";
import UpdateCourse from "./pages/UpdateCourse";
import AddIns from "./pages/AddIns";
import CreateCourse from "./pages/CreateCourse";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/Dashboard"} element={<Dashboard />} />
        <Route path={"/LogIn"} element={<LogIn />} />
        <Route path={"/Register"} element={<Register />} />
        <Route path={"/SignUp"} element={<SignUp />} />
        <Route path={"/ListOfCourses"} element={<ListOfCourses />} />
        <Route path={"/MyCourses"} element={<MyCourses />} />
        <Route path={"/SeeMore"} element={<SeeMore />} />
        <Route path={"/AboutUs"} element={<AboutUs />} />
        <Route path={"/UpdateCourse"} element={<UpdateCourse />} />
        <Route path={"/CreateCourse"} element={<CreateCourse />} />
        <Route path={"/AddIns"} element={<AddIns />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
