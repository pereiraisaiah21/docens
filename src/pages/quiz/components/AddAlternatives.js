import React, { useState } from "react";


function AddAlternatives ({
    setAlternatives
}) {

    const [inputValue, setInputValue] = useState( "" )
    const [alternativesList, setAlternativesList] = useState( [] )
    const [ list, setList ] = useState([])

    const addAlternative = function (e) {
        e.preventDefault();

        if(inputValue !== "") {
            alternativesList.push(inputValue)
            list.push(inputValue)
            setInputValue("")
        }
        
        console.log(alternativesList)
    }

    const revoveAlternative = function (e) {
        e.preventDefault();

        //alternativesList.slice()
       
        console.log("remover", list.slice(e.target.getAttribute("idevent"), 1))
        console.log("remover", list)    
        console.log("remover", e)    

    }

    return (
        <>
            <fieldset className="content__fldst">
                <input className="content__inpt" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="content__inpt" type="text" onClick={addAlternative}>+</button>
            </fieldset>
            <ul>
                {
                    list.map(( item, key ) => {
                        return (
                            <React.Fragment key={key}>
                                {
                                    item !== "" && (
                                        <li>
                                            <span>
                                                {item}
                                            </span>
                                            <button idevent={item} onClick={revoveAlternative}>
                                                X
                                            </button>
                                        </li>
                                    )
                                }
                            </React.Fragment>
                            
                        )
                    })
                }
            </ul>
        </>
    );
}

export default AddAlternatives;