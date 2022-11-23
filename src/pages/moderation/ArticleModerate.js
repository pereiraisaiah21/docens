import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserData from "../../UserData";
import api from "../../services/api";
import Modal from 'react-modal';

import MainTitle from "../../components/title/MainTitle";
import Emoji from 'a11y-react-emoji';
import { FaRegCheckCircle, FaMinusCircle } from 'react-icons/fa';

/**
 *
 * @returns
 */

function ArticleModerate () {

    let { id } = useParams();

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [ articleContent, setArticleContent ] = useState({
        data: [],
        error: ""
    });
    const [ loader, setLoader ] = useState( true );
    const [ modalIsOpen, setIsOpen ] = React.useState( false );
    const [ whyNotApproved, setWhyNotApproved ] = useState( "" );

    Modal.setAppElement( '#root' );

    const openModal = function( event ) {
        event.preventDefault();
        setIsOpen( true );
    };
    const closeModal = function() {
        setIsOpen( false );
    };

    const approvedClick = function (e) {
        e.preventDefault();
    }
    const handleSubmitFeedback = function (e) {
        e.preventDefault();
    }

    useEffect(() => {

        setTypeUser( userDataValues.typeUser )


        api
            .get( `posts/${id}` )
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
            });

    }, [ userDataValues ]);

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

        <section className="moderate">
            <div className="emoji--title">
                <Emoji className="emoji--navigation" symbol={"📃"} label="love" />
                <MainTitle description="moderar" descriptionUnder="Pubicações recentes" isCarousel={false} />
            </div>
            <div className="moderate__actions">
                <button className="moderate__button moderate__true" onClick={approvedClick}>
                    <FaRegCheckCircle className="moderate__icon" /> Aprovar
                </button>
                <button className="moderate__button moderate__false" onClick={openModal}>
                    <FaMinusCircle className="moderate__icon" /> Bloquear
                </button>
            </div>
            {
                true
                ?
                dataPlaceholder.map( ( item, key ) => {
                    return (
                        <div className="moderate__body" key={key}>
                            <h1 className="moderate__title">{ item.title }</h1>
                            <div className="moderate__scope moderate__scope--title">
                                { item.name }
                            </div>
                            <div className="moderate__scope moderate__scope--subTitle">
                                { item.subTitle }
                            </div>
                            <div className="moderate__scope">
                            <div dangerouslySetInnerHTML={{__html: item.scope}} />
                            </div>
                            <div className="moderate__author">
                                <span className="moderate__author__name">Autor: { item.info.author }</span>
                            </div>
                        </div>
                    )
                })
                :
                null
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={"Example Modal"}
                className="moderate__modal"
            >
                <div className="moderate__feedback">
                    <p>Digite a seguir o motivo:</p>
                    <form onSubmit={handleSubmitFeedback}>
                        <textarea className="moderate__input" value={whyNotApproved} onChange={(e) => setWhyNotApproved(e.target.value)} placeholder="Digite o motivo" cols={20}></textarea>
                        <button className="moderate__submit">
                            Confirmar
                        </button>
                    </form>
                </div>
            </Modal>
        </section>
    );
}

export default ArticleModerate;
