import React, { useContext, useState, useEffect } from "react";

import UserData from "../../UserData";

import FormUpdateUserData from "./components/FormUpdateUserData";

/**
 * 
 * @returns 
 */

function CreateProfile () {

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [updateUserData, setUpdateUserData] = useState( true );


    useEffect(() => {
        setTypeUser( userDataValues.typeUser )
    }, [userDataValues]);

    console.log(userDataValues.data.length)

    return (
        <section className="prfl__crt">
            <div className="prfl__wrpp">
            {
                !userDataValues.data.length
                ?
                <FormUpdateUserData data={userDataValues.data} setUpdateOpen={setUpdateUserData} action="create" />
                :
                ""
            }
            </div>
        </section>
    )
}

export default CreateProfile;