import React, { useState } from "react";
import axios from "axios";
import ImageUploading from 'react-images-uploading';
import Select from 'react-select'
import DatePicker from "react-datepicker";

import { FaInfoCircle, FaFileImport, FaCaretSquareUp } from 'react-icons/fa';

import "react-datepicker/dist/react-datepicker.css";
import "../Profile.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function FormUpdateUserData ({
    data,
    setUpdateOpen
}) {

    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const [avatar, setAvatar] = useState( "" );
    const [fullname, setFullname] = useState( "" );
    const [username, setUsername] = useState( "" );
    const [email, setEmail] = useState( "" );
    const [city, setCity] = useState( "" );
    const [gender, setGender] = useState( "" );
    const [birthdayDate, setBirthdayDate] = useState( new Date() );
    const genderOptions = [
        { value: "feminino", label: "Feminino" },
        { value: "masculino", label: "Masculino" },
        { value: "indefinido", label: "Prefiro não dizer" }
    ];

    const handleUpdateData = function( event ) {
        event.preventDefault();

        console.log( "Atualizar dados do usuário" );

        axios.post( "/user", {
            avatar : avatar === "" ? "" : avatar,
            fullname : fullname === "" ? "" : fullname,
            username : username === "" ? "" : username,
            email : email === "" ? "" : email,
            city : city === "" ? "" : city,
            gender : gender === "" ? "" : gender,
            birthdayDate: birthdayDate === "" ? "" : birthdayDate,
        })
        .then( response => {
            setUpdateOpen( true );
        })
        .catch( err =>  {
            console.log( err );
        });
    };

    const onChange = function( imageList, addUpdateIndex ) {
        // data for submit
        console.log( imageList, addUpdateIndex );
        setImages( imageList );
      };

    return (
        <form onSubmit={( e ) => e.preventDefault()}>
            <div className="prfl__inf">
                <ul className="prfl__inf__lst">
                    <li className="prfl__inf__itm prfl__inf__itm--upld">
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                            acceptType={["jpg"]}
                        >
                            {
                                ({
                                    imageList,
                                    onImageUpload,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps
                                }) => (
                                    <div className="prfl__inf--upld__wrppr">
                                        <button
                                            style={isDragging ? { color: "red" } : null}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            className="prfl__inf--upld__bttn"
                                        >
                                            <FaFileImport />
                                            Clique, ou arraste a imagem
                                        </button>
                                        {
                                            imageList.map( ( image, index ) => (
                                                <div key={index} className="prfl__inf--upld__img">
                                                    <img src={image.data_url ? image.data_url : "https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        <button className="prfl__inf--upld__bttnDwn" onClick={() => onImageUpdate( index )}>
                                                            <FaCaretSquareUp />
                                                            Atualizar
                                                        </button>
                                                        <button className="prfl__inf--upld__bttnDwn" onClick={() => onImageRemove( index )}>
                                                            Remover imagem
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </ImageUploading>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={fullname} placeholder={data.name} onChange={(e) => setFullname(e.target.value)} />
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={username} placeholder={data.username} onChange={(e) => setUsername(e.target.value)} />
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={email} placeholder={data.email} onChange={(e) => setEmail(e.target.value)} />
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={city} placeholder={data.address.city} onChange={(e) => setCity(e.target.value)} />
                    </li>
                    <li className="prfl__inf__itm">
                        <Select className="" options={genderOptions} onChange={(e) => setGender(e.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <DatePicker className="prfl__inpt" selected={birthdayDate} onChange={(birthdayDate) => setBirthdayDate(birthdayDate)} />           
                    </li>
                    <li className="prfl__inf__edtr">
                        <a href="/ds" title="Editar perfil" onClick={handleUpdateData}>
                            Salvar
                        </a>
                    </li>
                    <li className="prfl__inf__flr">
                        <span>
                            <FaInfoCircle />Estamos com problemas para atualizar seu cadastro. Tente novamente mais tarde.
                        </span>
                    </li>
                </ul>
            </div>
        </form>
    );
}

export default FormUpdateUserData;