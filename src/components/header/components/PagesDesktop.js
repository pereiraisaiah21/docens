import React from "react";

/**
 *
 * @returns
 */

function PagesDesktop () {

    const pagesDesktop = [{
		name : "Bem-vindo !",
		url : "/home",
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
