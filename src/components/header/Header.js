import React, { useState, useContext } from "react";
import UserData from "../../UserData";

import Logo from "./components/Logo";
import PagesMobile from "./components/PagesMobile";
import PagesDesktop from "./components/PagesDesktop";
import ActionsMobile from "./components/ActionsMobile";
import UserDataMobile from "./components/UserDataMobile";
import HeaderButtons from "./components/HeaderButtons";

/**
 * 
 * @returns 
 */

function Header () {

    const {userDataValues} = useContext( UserData );
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState( false );

    return (
		<>
     	<header className="hdr">
			<div className="hdr__wrppr">
				<Logo />
				<PagesDesktop />
				<HeaderButtons 
					userIsLogged={!!userDataValues.data.name}
					username={userDataValues.data.username}
					setMenuMobileClose={setIsMenuMobileOpen}
				/>
			</div>
			<div className={`hdr--mbl${isMenuMobileOpen ? " hdr--mbl--opn" : "" }`}>
			{
				isMenuMobileOpen
				?
				<div className="hdr__wrppr--m">
					<ActionsMobile setMenuMobileClose={setIsMenuMobileOpen} />
					<UserDataMobile userData={userDataValues.data} />
					<PagesMobile />
				</div>
				:
				""
			}
			</div>
        </header>
		<div className="hdr__wrppr view">
			<a href="http://localhost:3000/cursos" title="" className="">
				Cursos
			</a>
			<a href="http://localhost:3000/cursos/10" title="" className="">
				Curso
			</a>
			<a href="http://localhost:3000/materias" title="" className="">
				Materias
			</a>
			<a href="http://localhost:3000/materias/10" title="" className="">
				Materia
			</a>
			<a href="http://localhost:3000/materias/posts/1" title="" className="">
				Artigo
			</a>
			<a href="http://localhost:3000/quiz/posts/1" title="" className="">
				Quiz
			</a>
			<a href="http://localhost:3000/feed" title="" className="">
				Feed
			</a>
			<a href="http://localhost:3000/perfil/usuario" title="" className="">
				Perfil
			</a>
			<a href="http://localhost:3000/entrar" title="" className="">
				Login
			</a>
			<a href="http://localhost:3000/mensagens" title="" className="">
				Alerta
			</a>
			<a href="http://localhost:3000/ajuda" title="" className="">
				Ajuda
			</a>
			<a href="http://localhost:3000/contato" title="" className="">
				Contato
			</a>
			<a href="http://localhost:3000/cursos/alt/0" title="" className="">
				Cadastrar curso
			</a>
			<a href="http://localhost:3000/materias/alt" title="" className="">
				Cadastrar matéria
			</a>
			<a href="http://localhost:3000/materias/alt" title="" className="">
				Cadastrar artigo
			</a>
			<a href="http://localhost:3000/quiz/alt/posts/1" title="" className="">
				Cadastrar pergunta
			</a>
		</div>
		</>
    );
}

export default Header;