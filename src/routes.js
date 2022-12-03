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
import Aboutus from "./pages/institucional/aboutus";
import Cookies from "./pages/institucional/cookies";
import Greetings from "./pages/institucional/greetings";
import Terms from "./pages/institucional/terms";

import AllCourses from "./pages/course/AllCourses";
import Course from "./pages/course/Course";
import CreateUpdateCourse from "./pages/content/components/CreateUpdateCourse"

import Matter from "./pages/matter/Matter";
import Article from "./pages/matter/Article";
import AllMatters from "./pages/matter/AllMatters";
import CreateUpdateMatter from "./pages/content/components/CreateUpdateMatter";
import CreateUpdateArticle from "./pages/content/components/CreateUpdateArticle";

import Quiz from "./pages/quiz/Quiz";
import AllQuiz from "./pages/quiz/AllQuiz";
import CreateUpdateQuestion from "./pages/quiz/components/CreateUpdateQuestion";

import CreateUpdateTeacher from "./pages/content/components/CreateUpdateTeacher";
import Registration from "./pages/registration/Registration";
import ArticlesList from "./pages/moderation/ArticlesList";
import ArticleModerate from "./pages/moderation/ArticleModerate";
import DarkModeToggle from "./components/button/DarkModeToggle";
import Create from "./pages/create/Create";

/**
 * 
 * @returns 
 */

function SiteRoutes () {
    return (
        <Router>
            <BannerAndHeader />
            <DarkModeToggle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />

                <Route path="/feed" element={<Feed />} />
                <Route path="/ajuda" element={<Help />} />

                <Route path="/perfil" element={<Profile />} />

                <Route path="/entrar" element={<Login />} />
                <Route path="/cadastro" element={<Registration />} />

                <Route path="/mensagens" element={<Notification />} />
                <Route path="/emblemas" element={<Emblem />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/sobre-nos" element={<Aboutus />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/agradecimentos" element={<Greetings />} />
                <Route path="/termos-de-uso" element={<Terms />} />

                <Route path="/cursos" element={<AllCourses />} />
                <Route path="/cursos/:id" element={<Course />} />
                <Route path="/cursos/alt/:id" element={<CreateUpdateCourse />} />

                <Route path="/materias" element={<AllMatters />} />
                <Route path="/materias/:id/" element={<Matter />} />
                <Route path="/materias/:id/:contentid" element={<Article />} />

                <Route path="/materias/alt/" element={<CreateUpdateArticle />} />
                <Route path="/materias/alt/:id" element={<CreateUpdateMatter />} />
                <Route path="/materias/alt/:id/:contentid/" element={<CreateUpdateArticle />} />

                <Route path="/quiz/" element={<AllQuiz />} />
                <Route path="/quiz/:matter/:contentId" element={<Quiz />} />
                <Route path="/quiz/alt/" element={<CreateUpdateQuestion />} />
                <Route path="/quiz/alt/:id/:contentid" element={<CreateUpdateQuestion />} />

                <Route path="/professor/alt" element={<CreateUpdateTeacher />} />
                <Route path="/professor/alt/:id" element={<CreateUpdateTeacher />} />

                <Route path="/moderar" element={<ArticlesList />} />
                <Route path="/moderar/:id" element={<ArticleModerate />} />

                // Working here
                <Route path="/criar" element={<Create />} />

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
       </Router>
    );
}

export default SiteRoutes;
