import React from "react";

import { FaRegSadTear } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function ConnectionTimeoutWarn () {
    return (
        <div className="conectionTimeout">
            <p>
                <br /><br />
                <FaRegSadTear />  Não conseguimos acessar este conteúdo.
                <br /><br />
                Volte para o <a href="/feed" className="conectionTimeout__anchr" alt="Ir para o Feed de matérias">Feed</a> ou <a href="/materias" className="conectionTimeout__anchr" alt="Ir para todas as matérias">Todas as matérias</a> para prosseguir na sua trajetória.
            </p>
        </div>
    );
}

export default ConnectionTimeoutWarn;