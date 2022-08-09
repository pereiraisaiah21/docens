import React from "react";

import ImageCarousel from "../../../components/carousel/ImageCarousel";
import Header from "../../../components/header/Header";

function BannerAndHeader () {
    return (
        <section className="hmBnnrs">
            <Header />
            {
                // <ImageCarousel images={["https://thumbs.dreamstime.com/b/banner-da-web-de-educa%C3%A7%C3%A3o-global-estudante-sentado-em-uma-pilha-livros-para-fazer-comunica%C3%A7%C3%A3o-online-com-outro-lan%C3%A7amento-do-216337559.jpg", "https://thumbs.dreamstime.com/b/banner-da-web-de-educa%C3%A7%C3%A3o-global-estudante-sentado-em-uma-pilha-livros-para-fazer-comunica%C3%A7%C3%A3o-online-com-outro-lan%C3%A7amento-do-216337559.jpg"]}/>
                
            }
        </section>  
    );
}

export default BannerAndHeader;