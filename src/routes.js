import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import BannerAndHeader from "./pages/home/components/BannerAndHeader";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Error from "./pages/error/Error";
import Feed from "./pages/feed/Feed";
import Matter from "./pages/matter/Matter";
import Quiz from "./pages/quiz/Quiz";
import AllMatters from "./pages/matter/AllMatters";

function SiteRoutes () {
    return (
        <Router>
            <BannerAndHeader />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/materia/:id/:contentid' element={<Matter />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/materias' element={<AllMatters />} />

                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
       </Router>
    );
}

export default SiteRoutes;