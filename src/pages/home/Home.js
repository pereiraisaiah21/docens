import React from "react";

import ImageCarousel from "../../components/carousel/ImageCarousel";
import Header from "../../components/header/Header";

import "./Home.scss";
/**
 * 
 * @returns 
 */

function Home () {
    return (
        <section className="hmBnnrs">
            <Header />
            <ImageCarousel images={["https://apod.nasa.gov/apod/image/1009/AuroraPrelude_takasaka.jpg", "https://apod.nasa.gov/apod/image/1009/AuroraPrelude_takasaka.jpg"]}/>
        </section>  
    );
}

export default Home;