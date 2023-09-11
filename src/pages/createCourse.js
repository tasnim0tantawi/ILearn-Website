import React from "react";
import Navbar from "../components/Navbar";
import CoursesForm from "../components/CoursesForm";
import Footer from "../components/Footer";

function CreateCourse() {
  return (
    <>
      <Navbar />
      <CoursesForm type="Create"/>
      <Footer />
    </>
  );
}

export default CreateCourse;