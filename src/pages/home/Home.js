import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

    let userStorage = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    useEffect( () => {
        if ( JSON.parse(localStorage.getItem("user")) === null ) {
            return navigate("/entrar");
        }
    }, []);

    return (

        <>
        {
            !!userStorage && userStorage.occupation === "student"
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
