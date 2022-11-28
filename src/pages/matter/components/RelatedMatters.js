import React from "react";

import { FaEye, FaArrowRight } from 'react-icons/fa';

/**
 *
 * @param {*} param0
 * @returns
 */

function RelatedMatters ({
    relatedMatter
}) {

    return (

        <section className="mttr__rltd">
            <span className="mttr__rltd__ttl">
                PRÓXIMA MATÉRIA <FaArrowRight />
            </span>
            {
                [relatedMatter].map( ( item, key ) => {
                    return (
                        <a className="mttr__rltd__anchr" href="" title="" key={key}>
                            <img className="mttr__rltd__img" alt={item.name} src="https://st.depositphotos.com/1777684/2617/v/600/depositphotos_26172045-stock-illustration-hand-draw-chemistry-background.jpg" />
                            {item.name}
                            <span className="mttr__rltd__bttn">
                                <FaEye /> Acessar
                            </span>
                        </a>
                    )
                })
            }
        </section>
    );
}

export default RelatedMatters;
