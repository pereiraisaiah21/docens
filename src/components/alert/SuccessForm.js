import Emoji from 'a11y-react-emoji';

/**
 * 
 * @returns 
 */

function SuccessForm () {

    return (

        <div className="success">
            <div className="success__info">
                <Emoji className="emoji--success" symbol={"✅"} label="love" />
                Cadastro realizado com sucesso.
            </div>
        </div>
    );
};

export default SuccessForm;
