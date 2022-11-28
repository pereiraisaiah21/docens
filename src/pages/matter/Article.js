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

    // const textTestP = "<p>Às vezes, problemas que parecem muito ?</p><p><img class='img' src='https://img.freepik.com/vetores-premium/formulas-de-fisica-equacoes-matematicas-calculos-aritmeticos-blackboard-com-formulas-cientificas_461812-424.jpg' alt=''/><p class='wrnPrgrph'>Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas</p>";
    const textTestP = "";
    const [ loader, setLoader ] = useState( true );
    const [ articleContent, setArticleContent ] = useState({
        data: [],
        error: ""
    });
    const icon = ["🛄", "🛄", "🗿", "⚱", "🪣", "🧹", "🧷", "🧴", "🪑", "🛋", "🪟", - "🩺", "🩹", "🔬", "🧬", "🧰", "🪜", "⛓", "📉", "⚙", "📦", "🖊", "🪙"];

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

    const dataPlaceholder = [
    {
        name : "Lógica",
        subTitle: "Você sabe oque é lógica? Leia o artigo a seguir e confira mais sobre, e confira também exemplos a seguir",
        quickDescription: "Lorem Ipsum",
        matter: "Lógica",
        scope : "<p><b>A palavra lógica é originária do grego logos, que significa linguagem racional. É por meio do raciocínio lógico que o homem constrói algoritmos que podem ser transformados em programas capazes de solucionar problemas cada vez mais complexos.</b></p><p>A lógica de programação é necessária para pessoas que desejam trabalhar com desenvolvimento de sistemas e programas, pois ela permite definir a sequência lógica para o desenvolvimento. </p><p>A sequência lógica são passos executados até atingir um objetivo ou solução de um problema.Um algoritmo é formalmente uma sequência finita de passos que levam a execução de uma tarefa. Podemos pensar em algoritmo como uma receita, uma sequência de instruções que dão cabo de uma meta específica. Estas tarefas não podem ser redundantes nem subjetivas na sua definição, devem ser claras e precisas.</p><p>Como exemplos de algoritmos podemos citar os algoritmos das operações básicas (adição, multiplicação, divisão e subtração) de números reais decimais.</p><p>Outros exemplos seriam os manuais de aparelhos eletrônicos, como um videocassete, que explicam passo-a-passo como, por exemplo, gravar um evento.</p><p>Até mesmo as coisas mais simples, podem ser descritas por sequências lógicas. <p>Por exemplo:</p> <p>• Chupar uma bala </p><p>• Pegar a bala </p><p>• Retirar o papel </p><p>• Chupar a bala </p><p>• Jogar o papel no lixo</p>",
        image: "/",
        altImage: "",
        info: 
        {
            date: "23/11/2022",
            author: "Docens Educacional",
            last: "2 dias"
        },
        support: [
            {
                name: "A mecânica clássica",
                author: "Isaac Newton"
            },
            {
                name: "https://unicode.org/emoji/charts/full-emoji-list.html",
                author: "Isaac Newton"
            },
        ],
        observer: ["Aqui está relacionado ao rei William, que é a melhor rota entre Dallas no Texas"],
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
                                                <ImageWithCredits classStyleImg="mttr__img" classStyleCredit="mttr__img__crdts" imageSrc="https://council.science/wp-content/uploads/2017/04/IUPAC-feature-image-1400x600.jpg" iamgeAlt="Descriptions" imageCredits="https://br.freepik.com/vetores-premium/" />
                                                <h4 className="mttr__prmryTtl">
                                                    <div className="emoji--title">
                                                        <Emoji className="emoji--navigation" symbol={icon[Math.floor(Math.random() * icon.length)]} label="love" />
                                                        <MainTitle description={item.name}descriptionUnder="" isCarousel={false} />
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
                                                <p className="mttr__dtls__wrtr">Por {item.info.author} {item.info.date} - Atualizado a {item.info.last} dias</p>
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
                                            ""
                                        }
                                        <div className="mttr__prmryWrp txt-cntr">
                                            <p className="mttr__spprt">
                                                Precisa de ajuda? <br /><br /> Confira a seguir alguns conteúdos de recomendação para te ajudar.
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
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            :
                            ""
                        }
                        </div>
                        <RelatedMatters relatedMatter={dataPlaceholder[0].nextMatter}/>
                        <MatterTags tagMatter={dataPlaceholder[0].tags} />
                        <ButtonWorkout classStyle={"mttr__workout"} url={"/quiz/posts/1"} />
                    </div>
                </section>
            }
        </>
    );
}

export default Article;
