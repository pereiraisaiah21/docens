import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Matter.scss"

/**
 * 
 * @returns 
 */

function Matter () {

    const textTestP = "<p>Às vezes, problemas que parecem muito ?</p><p>Todos eles envolvem problemas de localização de rotas ou caminhos de busca: Como o atual Príncipe William está relacionado ao Rei William III, que fundou o College of William and Mary em 1693? Que caminho um fantasma deve seguir para alcançar o Pac-Man o mais rápido possível?</br></br><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><img class='img' src='https://rockcontent.com/br/wp-content/uploads/sites/2/2019/01/como-funciona-algoritmo-do-google-1.png' alt=''/>";  

    let {id} = useParams();
    let {contentid} = useParams();

    const [matterContent, setMatterContent] = useState({
        data: [],
        error: ""
    });

    const getMatterContent = function () {

        axios.get(`https://jsonplaceholder.typicode.com/${id}/${contentid}`)
        .then((response) => {

            setMatterContent({ ...matterContent, data: [response.data]});
        }).catch(err => {
            setMatterContent({ ...matterContent, error: err });
        });
    };

    useEffect( () => {
        getMatterContent();
    }, [getMatterContent]);

    return (
        <section className="mttr">
            <div className="mttr__wrppr">
                <div className="mttr__cntnt">
                {
                    matterContent.data !== null 
                    ?
                    matterContent.data.map((item, key) => {
                        return (
                            <div className="mttr__cntnt" key={key}>
                                <div className="mttr__prmryWrp" key={key}>
                                    <h4 className="mttr__prmryTtl">
                                        {item.title}
                                    </h4>
                                    <p className="mttr__scndtyTtl">
                                    {item.title}
                                    </p>
                                    <div className="mttr__dtls">
                                        <p className="mttr__dtls__wrtr">Por Editorial Cursos Educacionais</p>
                                        <p className="mttr__dtls__dt">19/07/2022 <span className="mttr__dtls__lstpdt">- Atualizado a 2 dias</span></p>
                                    </div>
                                </div>
                                <div className="mttr__prmryWrp mttr__prmryWrp--cntnt">
                                    {item.body}
                                    <div dangerouslySetInnerHTML={{__html:textTestP}}></div>
                                </div>
                                {/* {
                                    item.existAtivity
                                    ?
                                    ""
                                    :
                                    <div className="mttr__primaryWrap text-center font-def">
                                        <span className="mttr__activity">Atividades</span>
                                        <ButtonActivity className="mttr__activity__button" itemLink={`/atividades/${contentid}`} itemTitle="Módulo 01"/>
                                    </div>
                                } */}
                                <div className="mttr__prmryWrp">
                                    <p className="mttr__rf fnt-df">Referências</p>
                                    <ol className="mttr__rf__lst">
                                        <li>
                                            <p>
                                                A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                            </p>
                                            <p>Autor: <span>Julio Verne</span></p>
                                        </li>
                                        <li>
                                            <p>
                                                A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                            </p>
                                            <p>Autor: <span>Julio Verne</span></p>
                                        </li>
                                    </ol>
                                </div>
                                <div className="mttr__prmryWrp">
                                    <p className="mttr__spprt fnt-df">Precisa de ajuda?</p>
                                    <p className="mttr__spprt">Confira a seguir alguns conteúdos de apoio para te ajudar.</p>
                                    <ol className="mttr__spprt__lst">
                                        <li>
                                            <p>
                                                A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                            </p>
                                            <p>Autor: <span>Michael Douglas</span></p>
                                        </li>
                                        <li>
                                            <p>
                                                A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                            </p>
                                            <p>Autor: <span>Julio Verne</span></p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        )
                    })
                    :
                    ""
                }
                </div>
            </div>
           
        </section>
    );
}

export default Matter;