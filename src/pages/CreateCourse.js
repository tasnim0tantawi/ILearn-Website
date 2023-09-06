import React from "react";
import Header from "../components/Header";
import CoursesForm from "../components/CoursesForm";
import Footer from "../components/Footer";

function CreateCourse() {
  return (
    <>
      <Header />
      <CoursesForm type="Create"/>
      <Footer />
    </>
  );
}

export default CreateCourse;