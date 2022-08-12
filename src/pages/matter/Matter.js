import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { TailSpin } from "react-loader-spinner";
import { FaCalendarWeek } from 'react-icons/fa';
import ImageWithCredits from "./components/ImageWithCredits";

import "./Matter.scss"

/**
 * 
 * @returns 
 */

function Matter () {

    const textTestP = "<p>Às vezes, problemas que parecem muito ?</p><p><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><img class='img' src='https://img.freepik.com/vetores-premium/formulas-de-fisica-equacoes-matematicas-calculos-aritmeticos-blackboard-com-formulas-cientificas_461812-424.jpg' alt=''/>";  

    let {id} = useParams();
    let {contentid} = useParams();

    const [loader, setLoader] = useState(true);
    const [matterContent, setMatterContent] = useState({
        data: [],
        error: ""
    });

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/${id}/${contentid}`)
        .then((response) => {

            setMatterContent({ ...matterContent, data: [response.data]});
            setTimeout(() => setLoader(false), 3000);
        }).catch(err => {
            setMatterContent({ ...matterContent, error: err });
        });
    }, []);

    return (
        <>
            {
                loader
                ?
                <div className="ldr">
                    <TailSpin color = "rgba(255, 255, 255)"/>
                </div>
                :
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
                                            <ImageWithCredits classStyleImg="mttr__img" classStyleCredit="mttr__img__crdts" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7E45JK-WJ9ERO8Oj_DVTnfKQ7X47pr7QdaQtpZvvgYhtToIIQVEeiWLma69nWIEkvFY&usqp=CAU" iamgeAlt="Descriptions" imageCredits="https://br.freepik.com/vetores-premium/"/>
                                        </div>
                                        <div className="mttr__prmryWrp mttr__prmryWrp--cntnt">
                                            {item.body}
                                            <div dangerouslySetInnerHTML={{__html:textTestP}}></div>
                                        </div>
                                        {
                                            !!item.userId
                                            ?
                                                <div className="mttr__prmryWrp txt-cntr fnt-df">
                                                    <span className="mttr__actvty">Atividades</span>
                                                    <a className="mttr__actvty__bttn" href="/quiz/algebra" title="modulo01">
                                                       <FaCalendarWeek />
                                                        <span>Atividade</span>
                                                    </a>
                                                </div>
                                            :
                                            ""
                                        }
                                        {/* {
                                            item.existAtivity
                                            ?
                                            ""
                                            :
                                        } */}
                                        <div className="mttr__prmryWrp">
                                            <p className="mttr__rf">Referências</p>
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
                                            <p className="mttr__spprt">Precisa de ajuda?</p>
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
            }
        </>
    );
}

export default Matter;