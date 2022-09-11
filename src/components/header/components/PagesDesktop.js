import React from "react";

function PagesDesktop () {

    const pagesDesktop = [{
		name : "Bem-vindo Lucas!",
		url : "/",
		title : "Bem-vindo!"
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




