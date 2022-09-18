import React, { useState, useEffect } from "react";
import { FaPlus, FaTimes } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function AddAlternatives ({
    setAlternatives,
    setCorrectAlternative
}) {

    const [inputValue, setInputValue] = useState( "" );
    const [ alter, setAlter ] = useState({
        data : []
    });
    const [selected, setSelected] = useState( null );

    const handleAlternativeChange = function( e ) {
        setSelected( e.target.value );
    };

    const addAlternative = function (e) {
        e.preventDefault();

        if ( inputValue ) {
            let listAux = Array.from( alter.data )
            listAux.push({ id : 2, value : inputValue })
            setAlter({
                ...alter,
                data : listAux
            });
        }
    }

    const removeAlternative = function ( e, item ) {
        e.preventDefault();

        let listAux = Array.from( alter.data );
        listAux[item] = null;

        setAlter({
            ...alter,
            data : listAux
        });
    }

    useEffect( () => {
        let listAux = Array.from( alter.data ).filter( e => e !== null )
        
        setAlternatives( listAux );
        
    }, [ alter ]);

    useEffect( () => {
        
        setCorrectAlternative( selected );
        
    }, [ selected ]);


    return (

        <>
            <fieldset className="content__fldst content__fldst--altrntvs">
                <legend className="content__lgnd">Alternativas *</legend>

                <input className="content__inpt content__inpt--altrntvs" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

                <button className="content__btn content__btn--altrntvs" type="text" onClick={addAlternative}><FaPlus /></button>
            </fieldset>
            <ul className="content__altrntvs">
                {
                    alter.data !== null && (
                        alter.data.map(( item, key ) => {
                            return (
                                <React.Fragment key={key}>
                                 { 
                                    item !== null && item.value !== null && (
                                        <li key={key}>
                                            <label forhtml={`a${key}`}>
                                                <input 
                                                    type="radio" 
                                                    id={`a${key}`} 
                                                    name="choose" 
                                                    className="" 
                                                    value={item.value}
                                                    onChange={handleAlternativeChange}
                                                />
                                                <span style={{color: 'white'}}>
                                                    {item.value && (item.value)}
                                                </span>
                                            </label>
                                            <button keyevent={key} onClick={(e) => removeAlternative(e, key)}>
                                                <FaTimes />
                                            </button>
                                        </li>
                                     )
                                 }
                                </ React.Fragment>
                            )
                        })
                    )
                }
            </ul>
        </>
    );
}

export default AddAlternatives;