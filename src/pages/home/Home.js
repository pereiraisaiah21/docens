import React from "react";

import BannerAndHeader from "./components/BannerAndHeader";
import NavigationActions from "./components/NavigationActions";
import NavigationMyProgress from "./components/NavigationMyProgress";

import "./Home.scss";
/**
 * 
 * @returns 
 */

function Home () {
    return (
        <>
            <BannerAndHeader />  
            <NavigationActions />
            <NavigationMyProgress />
        </>
    );
}

export default Home;