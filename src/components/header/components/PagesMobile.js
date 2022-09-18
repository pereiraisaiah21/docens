import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function PagesMobile ({
    userData
}) {

    const pagesMobile = [{
		name : "Matérias",
		url : "/materias",
		title : "Ir para Todas as matérias"
	}];

    return (

        <section className="hdr--mbl__pgs">
            <ul className="hdr--mbl__lst">
                {
                    pagesMobile.map( ( item, key ) => {
                        return(
                            <li key={key}>
                                <a href={item.url} alt={item.title}>
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
		</section>
    );
}

export default PagesMobile;