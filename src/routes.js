import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/home/Home";
import BannerAndHeader from "./pages/home/components/BannerAndHeader";
import Footer from "./components/footer/Footer";

import Error from "./pages/error/Error";
import Feed from "./pages/feed/Feed";
import Help from "./pages/help/Help";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Notification from "./pages/notification/Notification";
import Emblem from "./pages/emblem/Emblem";
import Contact from "./pages/contact/Contact";

import AllCourses from "./pages/course/AllCourses";
import Course from "./pages/course/Course";
import CreateUpdateCourse from "./pages/content/components/CreateUpdateCourse"

import Matter from "./pages/matter/Matter";
import Article from "./pages/matter/Article";
import AllMatters from "./pages/matter/AllMatters";
import CreateUpdateMatter from "./pages/content/components/CreateUpdateArticler";

import Quiz from "./pages/quiz/Quiz";
import AllQuiz from "./pages/quiz/AllQuiz";
import CreateUpdateQuestion from "./pages/quiz/components/CreateUpdateQuestion";


function SiteRoutes () {
    return (
        <Router>
            <BannerAndHeader />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/feed" element={<Feed />} />
                <Route path="/ajuda" element={<Help />} />
                <Route path="/perfil/:username" element={<Profile />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/mensagens" element={<Notification />} />
                <Route path="/emblemas" element={<Emblem />} />
                <Route path="/contato" element={<Contact />} />

                <Route path="/cursos" element={<AllCourses />} />
                <Route path="/cursos/:id" element={<Course />} />
                <Route path="/cursos/alt/:id" element={<CreateUpdateCourse />} />
               

                <Route path="/materias" element={<AllMatters />} />
                <Route path="/materias/:id/" element={<Matter />} />
                <Route path="/materias/:id/:contentid" element={<Article />} />
                <Route path="/materias/alt/" element={<CreateUpdateMatter />} />
                <Route path="/materias/alt/:id/:contentid/" element={<CreateUpdateMatter />} />

                <Route path="/quiz/" element={<AllQuiz />} />
                <Route path="/quiz/:matter/:contentId" element={<Quiz />} />
                <Route path="/quiz/alt/" element={<CreateUpdateQuestion />} />
                <Route path="/quiz/alt/:id/" element={<CreateUpdateQuestion />} />

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
       </Router>
    );
}

export default SiteRoutes;