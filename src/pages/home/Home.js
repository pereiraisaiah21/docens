import React from "react";

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
    return (
        <>  
            <StudentInfo userInfo={{name : "Mattew McHugh", occupation : "Student", level : "5", avatar : "https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg"}} />
            <NavigationActions />
            <NavigationMyProgress />
            <NavigationTeachers />
        </>
    );
}

export default Home;