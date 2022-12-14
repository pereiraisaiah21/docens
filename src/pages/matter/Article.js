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
import Emoji from 'a11y-react-emoji';
import MainTitle from "../../components/title/MainTitle";

/**
 *
 * @returns
 */

function Article () {

    const {id} = useParams();
    const {contentid} = useParams();

    // const textTestP = "<p>Γs vezes, problemas que parecem muito ?</p><p><img class='img' src='https://img.freepik.com/vetores-premium/formulas-de-fisica-equacoes-matematicas-calculos-aritmeticos-blackboard-com-formulas-cientificas_461812-424.jpg' alt=''/><p class='wrnPrgrph'>Aqui estΓ‘ relacionado ao rei William, que Γ© a melhor rota entre Dallas no Texas</p>";
    const textTestP = "";
    const [ loader, setLoader ] = useState( true );
    const [ articleContent, setArticleContent ] = useState({
        data: [],
        error: ""
    });
    const icon = ["π", "π", "πΏ", "β±", "πͺ£", "π§Ή", "π§·", "π§΄", "πͺ", "π", "πͺ", - "π©Ί", "π©Ή", "π¬", "π§¬", "π§°", "πͺ", "β", "π", "β", "π¦", "π", "πͺ"];

    // const [ articleRelated, setArticleRelated ] = useState({
    //     data: [],
    //     error: ""
    // });
    // const [ articleTag, setArticleTag ] = useState({
    //     data: [],
    //     error: ""
    // });
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
                setLoader( false );
                setArticleContent({
                    ...articleContent,
                    data: dataPlaceholder,
                    error: err
                });
                // setFailToLoad( true );
            });

        // api
        //     .get( `https://jsonplaceholder.typicode.com/users/3` )
        //     .then( response => {

        //         console.log(response.data)
        //         setArticleRelated({
        //             ...articleRelated,
        //             data: [response.data]
        //         });
        //     }).catch( err => {
        //         setArticleRelated({
        //             ...articleRelated,
        //             error: err
        //         });
        //     });
    }, []);

    let dataPlaceholder = [
    {
        name : "LΓ³gica matemΓ‘tica",
        subTitle: "VocΓͺ sabe oque Γ© lΓ³gica matemΓ‘tica? Leia o artigo a seguir e confira mais sobre, e confira tambΓ©m exemplos a seguir",
        quickDescription: "Lorem Ipsum",
        matter: "LΓ³gica",
        scope : "<p><b>A lΓ³gica matemΓ‘tica analisa determinada proposiΓ§Γ£o buscando identificar se representa uma afirmaΓ§Γ£o verdadeira ou falsa.</b></p><p>A princΓ­pio, a lΓ³gica era ligada Γ  filosofia, tendo sido iniciada por AristΓ³teles (384-322 a.C.) que se baseava na teoria do silogismo, ou seja, em argumentaΓ§Γ΅es vΓ‘lidas.</p><p>A sequΓͺncia lΓ³gica sΓ£o passos executados atΓ© atingir um objetivo ou soluΓ§Γ£o de um problema.Um algoritmo Γ© formalmente uma sequΓͺncia finita de passos que levam a execuΓ§Γ£o de uma tarefa. Podemos pensar em algoritmo como uma receita, uma sequΓͺncia de instruΓ§Γ΅es que dΓ£o cabo de uma meta especΓ­fica. Estas tarefas nΓ£o podem ser redundantes nem subjetivas na sua definiΓ§Γ£o, devem ser claras e precisas.</p><p>Como exemplos de algoritmos podemos citar os algoritmos das operaΓ§Γ΅es bΓ‘sicas (adiΓ§Γ£o, multiplicaΓ§Γ£o, divisΓ£o e subtraΓ§Γ£o) de nΓΊmeros reais decimais.</p><p>AtΓ© mesmo as coisas mais simples, podem ser descritas por sequΓͺncias lΓ³gicas. <p>A lΓ³gica sΓ³ passou a ser uma Γ‘rea da MatemΓ‘tica a partir dos trabalhos de George Boole (1815-1864) e Augustus de Morgan (1806-1871), quando eles apresentaram os fundamentos da lΓ³gica algΓ©brica. Essa mudanΓ§a de paradigma tornou a lΓ³gica matemΓ‘tica uma importante ferramenta para a programaΓ§Γ£o de computadores.</p>",
        image: "/",
        altImage: "",
        info: 
        {
            date: "03/12/2022",
            author: "Docens Educacional",
            last: "13 dias"
        },
        support: [
            {
                name: "A mecΓ’nica clΓ‘ssica",
                author: "Isaac Newton"
            },
            {
                name: "https://unicode.org/emoji/charts/full-emoji-list.html",
                author: "Isaac Newton"
            },
        ],
        observer: ["Aqui estΓ‘ relacionado ao rei William, que Γ© a melhor rota entre Dallas no Texas"],
        tags: [
            "Tag 01", "Tag 02", "Tag 03", "Tag 04"
        ],
        nextMatter:
        {
            name : "Materia 03",
            url : "",
            image: "/",
            imageAlt: ""
        }
    }
    ];
/*
INTRO TITULO
Aqui vai o subtitulo
    A lΓ³gica Γ© uma Γ‘rea da filosofia que visa estudar a estrutura formal dos enunciados (proposiΓ§Γ΅es) e suas regras.

A lΓ³gica Γ© uma Γ‘rea da filosofia que visa estudar a estrutura formal dos enunciados (proposiΓ§Γ΅es) e suas regras.

A sequΓͺncia lΓ³gica sΓ£o passos executados atΓ© atingir um objetivo ou soluΓ§Γ£o de um problema.Um algoritmo Γ© formalmente uma sequΓͺncia finita de passos que levam a execuΓ§Γ£o de uma tarefa. Podemos pensar em algoritmo como uma receita, uma sequΓͺncia de instruΓ§Γ΅es que dΓ£o cabo de uma meta especΓ­fica. Estas tarefas nΓ£o podem ser redundantes nem subjetivas na sua definiΓ§Γ£o, devem ser claras e precisas.
*/
    if ( contentid === "introducao" ) {

        dataPlaceholder = [
            {
                name : "Intro titulo",
                subTitle: "Aqui vai o subtitulo",
                quickDescription: "",
                matter: "LΓ³gica",
                scope : "<p><b>A lΓ³gica Γ© uma Γ‘rea da filosofia que visa estudar a estrutura formal dos enunciados (proposiΓ§Γ΅es) e suas regras.</b></p><p>A lΓ³gica Γ© uma Γ‘rea da filosofia que visa estudar a estrutura formal dos enunciados (proposiΓ§Γ΅es) e suas regras.</p><p>A sequΓͺncia lΓ³gica sΓ£o passos executados atΓ© atingir um objetivo ou soluΓ§Γ£o de um problema.Um algoritmo Γ© formalmente uma sequΓͺncia finita de passos que levam a execuΓ§Γ£o de uma tarefa. Podemos pensar em algoritmo como uma receita, uma sequΓͺncia de instruΓ§Γ΅es que dΓ£o cabo de uma meta especΓ­fica. Estas tarefas nΓ£o podem ser redundantes nem subjetivas na sua definiΓ§Γ£o, devem ser claras e precisas.</p>",
                image: "/",
                altImage: "",
                info: 
                {
                    date: "03/12/2022",
                    author: "Docens Educacional",
                    last: "0 dias"
                },
                support: [
                    {
                        name: "Livro lΓ³gica",
                        author: "Lawrence Goldstein"
                    },
                    {
                        name: "https://www.todamateria.com.br/o-que-e-logica/",
                        author: "Toda matΓ©ria"
                    },
                ],
                observer: ["Aqui estΓ‘ relacionado ao rei William, que Γ© a melhor rota entre Dallas no Texas"],
                tags: [
                    "Tag 01", "Tag 02", "Tag 03", "Tag 04"
                ],
                nextMatter:
                {
                    name : "Materia 03",
                    url : "",
                    image: "/",
                    imageAlt: ""
                }
            }
        ];
    }

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
                                            <div className="mttr__hightlight">
                                                {/* <ImageWithCredits classStyleImg="mttr__img" classStyleCredit="mttr__img__crdts" imageSrc="https://www.eratuku.com/wp-content/uploads/2019/12/minda-otak.jpg" iamgeAlt="Descriptions" imageCredits="https://br.freepik.com/vetores-premium/" /> */}
                                                <h4 className="mttr__prmryTtl">
                                                    <div className="emoji--title">
                                                        <Emoji className="emoji--navigation" symbol={icon[Math.floor(Math.random() * icon.length)]} label="love" />
                                                        <MainTitle description={item.name} descriptionUnder="" isCarousel={false} />
                                                    </div>
                                                </h4>
                                            </div>
                                            <p className="mttr__trcryTtl">
                                                {item.matter}
                                            </p>
                                            <p className="mttr__scndtyTtl">
                                                {item.subTitle}
                                            </p>
                                            <div className="mttr__dtls">
                                                <p className="mttr__dtls__wrtr">Por {item.info.author} {item.info.date} - Atualizado a 0 dias</p>
                                                {/* <p className="mttr__dtls__dt">19/07/2022 <span className="mttr__dtls__lstpdt">- Atualizado a 2 dias</span></p> */}
                                            </div>
                                        </div>
                                        <div className="mttr__prmryWrp mttr__prmryWrp--cntnt">
                                            <div dangerouslySetInnerHTML={{__html: item.scope}} />
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
                                            null
                                        }
                                        {/* <div className="mttr__prmryWrp txt-cntr">
                                            <p className="mttr__spprt">
                                                ReferΓͺncias recomendadas <br /><br />
                                            </p>
                                            <ol className="mttr__spprt__lst">
                                                {
                                                    dataPlaceholder[0].support.map( ( item, key ) => {
                                                        return (
                                                            <li key={key}>
                                                                <p>
                                                                    {item.name}
                                                                </p>
                                                                <p>
                                                                    Autor: 
                                                                    <span>
                                                                        {item.author}
                                                                    </span>
                                                                </p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div> */}
                                    </React.Fragment>
                                )
                            })
                            :
                            null
                        }
                        </div>
                        {/* <RelatedMatters relatedMatter={dataPlaceholder[0].nextMatter}/> */}
                        <MatterTags tagMatter={dataPlaceholder[0].tags} />
                        <ButtonWorkout classStyle={"mttr__workout"} url={"/quiz/posts/1"} />
                    </div>
                </section>
            }
        </>
    );
}

export default Article;
