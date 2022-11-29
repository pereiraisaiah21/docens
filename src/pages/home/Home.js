import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StudentInfo from "../../components/User/StudentInfo";
import SeparationDots from "./components/default/SeparationDots";
import NavigationActions from "./components/NavigationActions";
import NavigationMyProgress from "./components/default/NavigationMyProgress";
import Topics from "./components/Topics";
import NavigationTeachers from "./components/default/NavigationTeachers";
import ModerateActions from "./components/ModerateActions";
import CreateActions from "./components/CreateActions";

/**
 *
 * @returns
 */

function Home () {

    let userStorage = JSON.parse(localStorage.getItem("user"));
    let isADM = JSON.parse(localStorage.getItem("adm"));
    let navigate = useNavigate();

    useEffect( () => {

        if ( !userStorage ) {
            return navigate("/entrar");
        }
    }, [] );

    return (

        <>
        {
            !isADM 
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
            <>
                <NavigationActions />
                <ModerateActions />
                <CreateActions />
            </>
        }
        </>
    );
}

export default Home;
