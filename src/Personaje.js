import React from "react";
import "./Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect  } from 'react';
import "./Personaje.css";

const database = getDatabase();

function Personaje({ params }) {

    const { name } = params;
    const [per, setper] = useState();

    useEffect(function () {

        onValue(ref(database, "Personajes/" + name), (snapshot) => {
            setper(snapshot.val())
        })


    }, [name])

    if(per !== undefined){
        console.log(per.imagenCompleta)
        return (
            <div>
                <p className="nombre">{name}</p>
                <div className="centro">
                    <img className="imagen" src={per.imagenCompleta} alt="" />

                    <div className="artefactos">

                    </div>

                    <div className="arma"> 

                    </div>
                </div>
            </div>
        )
    }else{
        return<div className="completo"/>
    }
    

}

export default Personaje