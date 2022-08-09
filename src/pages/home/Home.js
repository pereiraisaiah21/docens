import React from "react";

import BannerAndHeader from "./components/BannerAndHeader";
import NavigationActions from "./components/NavigationActions";

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
        </>
    );
}

export default Home;