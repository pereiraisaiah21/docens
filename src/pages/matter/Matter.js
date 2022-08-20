import React, { useState, useEffect } from "react";
import axios from "axios";

import ImageWithCredits from "./components/ImageWithCredits";
import RelatedMatters from "./components/RelatedMatters";
import ButtonWorkout from "../../components/button/ButtonWorkout";
import { TailSpin } from "react-loader-spinner";
import { FaCalendarWeek } from 'react-icons/fa';
import ConnectionTimeoutWarn from "../../components/alert/ConnectionTimeoutWarn";

import MatterTags from "./components/MatterTags";

/**
 * 
 * @returns 
 */

function Matter ({
    idMatter,
    topicMatter
}) {

    const textTestP = "<p>Às vezes, problemas que parecem muito ?</p><p><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><img class='img' src='https://img.freepik.com/vetores-premium/formulas-de-fisica-equacoes-matematicas-calculos-aritmeticos-blackboard-com-formulas-cientificas_461812-424.jpg' alt=''/>";  

    const [loader, setLoader] = useState( true );
    const [matterContent, setMatterContent] = useState({
        data: [],
        error: ""
    });
    const [matterRelated, setMatterRelated] = useState({
        data: [],
        error: ""
    });
    const [matterTag, setMatterTag] = useState({
        data: [],
        error: ""
    });
    const [failToLoad, setFailToLoad] = useState( false );

    useEffect( () => {
        axios.get( `https://jsonplaceholder.typicode.com/${idMatter}/${topicMatter}` )
        .then( response => {

            setMatterContent({
                ...matterContent,
                data: [response.data]
            });
            setTimeout( () => 
                setLoader( false ),
                3000
            );
        }).catch( err => {
            setMatterContent({
                ...matterContent,
                error: err 
            });
            setFailToLoad( true );
        });

        axios.get( `https://jsonplaceholder.typicode.com/users/3` )
        .then( response => {

            setMatterRelated({
                ...matterRelated,
                data: [response.data]
            });
        }).catch( err => {
            setMatterRelated({
                ...matterRelated,
                error: err 
            });
        });

        axios.get( `https://jsonplaceholder.typicode.com/users` )
        .then( response => {

            setMatterTag({
                ...matterTag,
                data: response.data
            });
        }).catch( err => {
            setMatterTag({
                ...matterTag,
                error: err 
            });
        });
    }, []);

    return (
        <>
            {
                loader
                ?
                    failToLoad 
                    ?
                    <ConnectionTimeoutWarn />
                    :
                    <div className="ldr">
                        <TailSpin color = "rgba(255, 255, 255)" />
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
                                    <React.Fragment key={key}>
                                        <div className="mttr__prmryWrp">
                                            <p className="mttr__trcryTtl">
                                                Algebra Quântica
                                            </p>
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
                                            <ImageWithCredits classStyleImg="mttr__img" classStyleCredit="mttr__img__crdts" imageSrc="https://council.science/wp-content/uploads/2017/04/IUPAC-feature-image-1400x600.jpg" iamgeAlt="Descriptions" imageCredits="https://br.freepik.com/vetores-premium/" />
                                        </div>
                                        <div className="mttr__prmryWrp mttr__prmryWrp--cntnt">
                                            {item.body}
                                            <div dangerouslySetInnerHTML={{__html:textTestP}} />
                                        </div>
                                        {
                                            !!item.userId
                                            ?
                                                <div className="mttr__prmryWrp txt-cntr fnt-df">
                                                    <span className="mttr__actvty">
                                                        Atividades
                                                    </span>
                                                    <a className="mttr__actvty__bttn" href="/quiz/algebra" title="modulo01">
                                                        <FaCalendarWeek />
                                                        <span>
                                                            Atividade
                                                        </span>
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
                                            <p className="mttr__spprt">
                                                Precisa de ajuda? <br /><br /> Confira a seguir alguns conteúdos de apoio para te ajudar.
                                            </p>
                                            <ol className="mttr__spprt__lst">
                                                <li>
                                                    <p>
                                                        A física clássica de cabeça para baixo: como Einstein descobriu a teoria da relatividade especial
                                                    </p>
                                                    <p>
                                                        Autor: 
                                                        <span>
                                                            Michael Douglas
                                                        </span>
                                                    </p>
                                                </li>
                                            </ol>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            :
                            ""
                        }
                        </div>
                        <RelatedMatters relatedMatter={matterRelated.data}/>
                        <ButtonWorkout classStyle={"mttr__workout"} url={"/quiz/posts/1"} />
                    </div>
                    <MatterTags tagMatter={matterTag.data} />
                </section>
            }
        </>
    );
}

export default Matter;