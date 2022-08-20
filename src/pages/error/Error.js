import React from "react";

/**
 * 
 * @returns 
 */

function Error () {

    return (
        <section className="notFound">
            <figure>
                <figcaption className="notFound__dsc">Página não encontrada, verifique a url digitada.</figcaption>
                <img alt="Imagem de 404 - Not Found" className="notFound__img" src="https://cdn-icons-png.flaticon.com/512/564/564772.png"/>
            </figure>
        </section>
    );
}

export default Error;