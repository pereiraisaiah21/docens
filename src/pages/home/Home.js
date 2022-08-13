import React, { useContext } from "react";

import UserData from "../../UserData";

import StudentInfo from "../../components/User/StudentInfo";
import NavigationActions from "./components/NavigationActions";
import NavigationMyProgress from "./components/NavigationMyProgress";
import NavigationTeachers from "./components/NavigationTeachers";

import "./Home.scss";
/**
 * 
 * @returns 
 */

function Home () {

    const {userDataValues} = useContext(UserData);

    return (
        <> 
            <StudentInfo userInfo={{name : userDataValues.data.name, occupation : userDataValues.data.email, level : userDataValues.data.id, avatar : "https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg"}} />
            <NavigationActions />
            <NavigationMyProgress slider={true}/>
            <NavigationTeachers />
        </>
    );
}

export default Home;