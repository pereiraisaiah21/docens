import React from 'react';

import { FaUserTag } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function Avatar () {

    const avatars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A1", "B2", "C3", "D4", "E5", "F6"  ];

    return (

        <fieldset className="rgsttn__flst rgsttn__flst--avatar">
            <legend className="prfl__inf__itm">
                <FaUserTag />
                Avatar
            </legend>
            {
                avatars.map( ( item, key ) => {
                    return (
                        <div className="rgsttn__flst--avatar__item" key={key}>
                            <label className="rgsttn__flst__label" forhtml={item}>
                                <input id={item} className="rgsttn__flst--avatar__input" name="avatar" type="radio" />
                                <img alt={`Avatar do tipo ${item}`} className="rgsttn__flst--avatar__image" src={`/avatar/${key + 1}.png`} />
                            </label>
                        </div>
                    )
                })
            }
        </fieldset>
    );
}

export default Avatar;
