import React, { useState } from "react";
import axios from "axios";
import Select from 'react-select'

import MainTitle from "../../components/title/MainTitle";

import { FaOptinMonster, FaInfoCircle } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function Contact () {

    const [subject, setSubject] = useState( null );
    const [message, setMessage] = useState( null );
    const [formSendSuccess, setFormSendSuccess] = useState( null );
    const subjectOptions = [
        { value: "materia", label: "Materias" },
        { value: "pergunta", label: "Quiz" },
        { value: "feedback", label: "Feedback" },
        { value: "outro", label: "Outro" }
    ];

    console.log(formSendSuccess)

    const handleSubmit = function(event) {
        event.preventDefault();

        if (subject !== null && message !== null) {
            console.log("send")

            axios.post( "/contato", {
                subject : subject,
                message : message,
                //email : email,
            })
            .then( response => {
                setFormSendSuccess( true );
            })
            .catch( err =>  {
                setFormSendSuccess( false );
            });
        }
    }

    return (

        <section className="cntct">
            <div className="cntct__wrp">
                <MainTitle description="Contato" descriptionUnder="Preencha o formulário abaixo" icon={<FaOptinMonster />} />
                <form className="cntct__frm" onSubmit={handleSubmit}>
                    <fieldset className="cntct__fldst">
                        <legend className="cntct__lgnd">Selecione o assunto</legend>
                        <Select 
                            className="cntct__slct"
                            options={subjectOptions}
                            onChange={(e) => setSubject(e.value)}
                            placeholder="Selecione um assunto"
                        />
                    </fieldset>
                    <fieldset className="cntct__fldst">
                        <legend className="cntct__lgnd">Digite sua mensagem</legend>
                        <textarea className="cntct__inpt" onChange={(e) => setMessage(e.target.value)} placeholder="Digite" rows="5" type="text" />
                    </fieldset>
                    <fieldset className="cntct__fldst">
                        <input className="cntct__sbmt" type="submit" />
                    </fieldset>
                </form>
                <span className="cntct__rtrn">
                    <FaInfoCircle />
                    {
                        formSendSuccess !== null && formSendSuccess
                        ?
                        "Contato enviado com sucesso, assim que respondido, você verá em seu painel de notificações."
                        :
                        (!formSendSuccess
                        ?
                        "Estamos com problemas para enviar seu contato. Tente novamente mais tarde."
                        :
                        "")
                    }
                </span>
            </div>
        </section>
    );
}

export default Contact;