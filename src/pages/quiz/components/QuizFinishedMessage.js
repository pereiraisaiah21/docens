import React from 'react';

import { FaRegCheckCircle } from 'react-icons/fa';

/**
 *
 * @param {*} param0
 * @returns
 */

function QuizFinishedMessage () {

    return (
        <div className="Question__fineshed">
            <p>
                <FaRegCheckCircle /> 
                Parabéns ! Você finalizou o questionário deste conteúdo.
            </p>
            <p>
                Volte para o <a href="/feed" className="Question__fineshed__anchor" alt="Ir para o Feed de matérias">Feed</a> ou <a href="/feed" className="Question__fineshed__anchor" alt="Ir para todas as matérias">Todas as matérias</a> para prosseguir na sua trajetória.
            </p>
            <p>
                Para conferir seus resultados acesse 
                <a href="/perfil/myProfile" className="Question__fineshed__anchor" alt="Ir para meu perfil">
                    Meu perfil
                </a>
            </p>
        </div>
    );
}

export default QuizFinishedMessage;
