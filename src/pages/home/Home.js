import React from "react";

import BannerAndHeader from "./components/BannerAndHeader";
import NavigationActions from "./components/NavigationActions";
import NavigationMyProgress from "./components/NavigationMyProgress";
import NavigationTeachers from "./components/NavigationTeachers";

import Footer from "../../components/footer/Footer";

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
            <NavigationTeachers />
            <Footer />
        </>
    );
}

export default Home;