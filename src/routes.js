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
import Help from "./pages/help/Help";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Notification from "./pages/notification/Notification";
import Emblem from "./pages/emblem/Emblem";
import Contact from "./pages/contact/Contact";
import Content from "./pages/content/Content";
import Edit from "./pages/content/components/Edit";

function SiteRoutes () {
    return (
        <Router>
            <BannerAndHeader />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/feed" element={<Feed />} />

                <Route path="/materias" element={<AllMatters />} />
                <Route path="/materias/:id/:contentid" element={<Matter />} />
                
                <Route path="/materias/alt/:id/:contentid/" element={<Edit />} />
                <Route path="/materias/alt/" element={<Edit />} />

                
                <Route path="/quiz/:matter/:contentId" element={<Quiz />} />

                <Route path="/ajuda" element={<Help />} />
                <Route path="/perfil/:username" element={<Profile />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/mensagens" element={<Notification />} />
                <Route path="/emblemas" element={<Emblem />} />
                <Route path="/contato" element={<Contact />} />

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
       </Router>
    );
}

export default SiteRoutes;