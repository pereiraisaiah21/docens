
import React from "react";

function PagesDesktop () {

    const pagesDesktop = [{
		name : "Matérias",
		url : "/materias",
		title : "Ir para Todas as matérias"
	}];

    return (
        <div className="hdr__pgs">
            {
                pagesDesktop.map( ( item, key ) => {
                    return (
                        <a href={item.url} className="hdr__pgs__itm" title={item.title} key={key}>
                            {item.name}
                        </a>
                    )
                })
            }
		</div>
    );
}

export default PagesDesktop;




