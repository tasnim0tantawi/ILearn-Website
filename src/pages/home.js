import React from "react";
import Testimonials from "../components/Testemonials";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
        <Navbar />
        <Carousel />
        <Card title="Most popular courses"/>
        <Testimonials />
        <Footer />
        </>

    );
}
export default Home;