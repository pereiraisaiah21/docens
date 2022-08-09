import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Error from "./pages/error/Error";

function SiteRoutes () {
    return (
        <Router>
           <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='*' element={<Error/>} />
           </Routes>
           <Footer />
       </Router>
    );
}

export default SiteRoutes;