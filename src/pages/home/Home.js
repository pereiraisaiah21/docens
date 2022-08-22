import React, { useContext, useState, useEffect } from "react";

import UserData from "../../UserData";

import StudentInfo from "../../components/User/StudentInfo";
import SeparationDots from "./components/default/SeparationDots";
import NavigationActions from "./components/NavigationActions";
import NavigationMyProgress from "./components/default/NavigationMyProgress";
import Tutorial from "./components/Tutotial";
import NavigationTeachers from "./components/default/NavigationTeachers";

/**
 * 
 * @returns 
 */

function Home () {

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );

    useEffect(() => {
        setTypeUser( userDataValues.typeUser )
    }, [userDataValues]);

    return (
        <> 

        {
            typeUser === "default"
            ?
            <>
                <StudentInfo userInfo={{
                    name : userDataValues.data.name,
                    occupation : userDataValues.data.email,
                    level : userDataValues.data.id,
                    avatar : "https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg"
                }} />
                <NavigationActions typeUser={typeUser} />
                <SeparationDots />
                <NavigationMyProgress slider={"true"} />
                <SeparationDots />
                <Tutorial />
                <SeparationDots />
                <NavigationTeachers />
            </>
            :
            <NavigationActions typeUser={typeUser} />
        }
        </>
    );
}

export default Home;