import React, { useState, useEffect } from "react";
import api from "../../services/api"
import { useParams } from "react-router-dom";

import ImageWithCredits from "./components/ImageWithCredits";
import RelatedMatters from "./components/RelatedMatters";
import ButtonWorkout from "../../components/button/ButtonWorkout";
import MatterTags from "./components/MatterTags";
import { TailSpin } from "react-loader-spinner";
import { FaCalendarWeek } from 'react-icons/fa';
import ConnectionTimeoutWarn from "../../components/alert/ConnectionTimeoutWarn";


/**
 *
 * @returns
 */

function Article () {

    const {id} = useParams();
    const {contentid} = useParams();

    const textTestP = "<p>Às vezes, problemas que parecem muito ?</p><p><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p><img class='img' src='https://img.freepik.com/vetores-premium/formulas-de-fisica-equacoes-matematicas-calculos-aritmeticos-blackboard-com-formulas-cientificas_461812-424.jpg' alt=''/>";

    const [ loader, setLoader ] = useState( true );
    const [ articleContent, setArticleContent ] = useState({
        data: [],
        error: ""
    });
    const [ articleRelated, setArticleRelated ] = useState({
        data: [],
        error: ""
    });
    const [ articleTag, setArticleTag ] = useState({
        data: [],
        error: ""
    });
    const [ failToLoad, setFailToLoad ] = useState( false );

    useEffect( () => {

        api
            .get( `/${id}/${contentid}` )
            .then( response => {

                setArticleContent({
                    ...articleContent,
                    data: [response.data]
                });
                setTimeout( () =>
                    setLoader( false ),
                    3000
                );
            }).catch( err => {
                setArticleContent({
                    ...articleContent,
                    error: err
                });
                setFailToLoad( true );
            });

        api
            .get( `https://jsonplaceholder.typicode.com/users/3` )
            .then( response => {

                console.log(response.data)
                setArticleRelated({
                    ...articleRelated,
                    data: [response.data]
                });
            }).catch( err => {
                setArticleRelated({
                    ...articleRelated,
                    error: err
                });
            });

        api
            .get( "/users" )
            .then( response => {

                setArticleTag({
                    ...articleTag,
                    data: response.data
                });
            }).catch( err => {
                setArticleTag({
                    ...articleTag,
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
                        <TailSpin color="rgba(255, 255, 255)" />
                    </div>
                :
                <section className="mttr">
                    <div className="mttr__wrppr">
                        <div className="mttr__cntnt">
                        {
                            articleContent.data !== null
                            ?
                            articleContent.data.map((item, key) => {
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
                        {
                          console.log('p',articleRelated.data)
                        }
                        <RelatedMatters relatedMatter={articleRelated.data}/>
                        <MatterTags tagMatter={articleTag.data} />
                        <ButtonWorkout classStyle={"mttr__workout"} url={"/quiz/posts/1"} />
                    </div>
                </section>
            }
        </>
    );
}

export default Article;
