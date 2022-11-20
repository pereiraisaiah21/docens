import React, { useContext, useState, useEffect } from "react";

import UserData from "../../UserData";

import StudentInfo from "../../components/User/StudentInfo";
import SeparationDots from "./components/default/SeparationDots";
import NavigationActions from "./components/NavigationActions";
import NavigationMyProgress from "./components/default/NavigationMyProgress";
import Topics from "./components/Topics";
import NavigationTeachers from "./components/default/NavigationTeachers";

/**
 *
 * @returns
 */

function Home () {

    const { userDataValues, setUserDataValues } = useContext( UserData );
    // const [ typeUser, setTypeUser ] = useState( null );

    let userStorage = JSON.parse(localStorage.getItem("user"));

    console.log( " User Storage " , userStorage );
    useEffect(() => {
        console.log(userDataValues)
        // setTypeUser( userDataValues.typeUser )

        console.log("p", userDataValues.data.occupation)
    }, [ userDataValues ]);

    console.log(userDataValues)

    return (

        <>
        {
            userStorage.occupation === "student"
            ?
            <>
                <StudentInfo />


                <NavigationActions />
                <SeparationDots />
                <NavigationMyProgress slider={"true"} sliderTitle={true}  NavigationMyStats={true} />
                <SeparationDots />
                <NavigationTeachers />
                <SeparationDots additionalClass="Home__arrowDown--seemore" />
                <Topics />
            </>
            :
            <NavigationActions />
        }
        </>
    );
}

export default Home;
