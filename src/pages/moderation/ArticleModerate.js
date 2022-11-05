import React, { useContext, useState, useEffect } from "react";

import UserData from "../../UserData";

/**
 *
 * @returns
 */

function ArticleModerate () {

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );

    useEffect(() => {

        setTypeUser( userDataValues.typeUser )
    }, [ userDataValues ]);

    return (

        <section>
       
        </section>
    );
}

export default ArticleModerate;
