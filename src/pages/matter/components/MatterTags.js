import React from "react";

import { FaTags } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function MatterTags ({
    tagMatter
}) {

    return (

        <section className="mttr__tgs">
            <span className="mttr__tgs__ttl">
                <FaTags />
                TAGS
            </span>
            {
                tagMatter.map( ( item, key ) => {
                    return (
                        <a className="mttr__tgs__anchr" href={item.email} title={item.name} key={key}>
                            {item.name}
                        </a>
                    )
                })
            }
        </section>
    );
}

export default MatterTags;