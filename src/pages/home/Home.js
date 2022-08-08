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
            <ImageCarousel images={["https://lunetas.com.br/wp-content/uploads/2017/01/portal-lunetas-como-zelar-pela-educacao-infantil-em-tempos-de-isolamento-social.jpg", "https://lunetas.com.br/wp-content/uploads/2017/01/portal-lunetas-como-zelar-pela-educacao-infantil-em-tempos-de-isolamento-social.jpg"]}/>
        </section>  
    );
}

export default Home;