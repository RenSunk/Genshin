import React from "react";
import './App.css';
import { Link } from "wouter";
import "./Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react';

const database = getDatabase();
const Inicio = () => {

    const [personajes, setpersonajes] = useState([])
    const [elementos, setelementos] = useState([])

    useEffect(() => {

        onValue(ref(database, "Personajes"), (snapshot) => {
            const data = snapshot.val();
            setpersonajes([data])
        })

        onValue(ref(database, "elementos"), (snapshot) => {
            const data = snapshot.val();
            setelementos(data)
        })

    }, [])

    return (
        <div className='lista'>
            {
                personajes.map((val) => {
                    let data = []
                    for (let i in val) {
                        data.push(i)
                    }
                    return data.map((va) => {
                        if (val[va].tipo === "legendario") {
                            return (
                                <div className='targeta-legendario' key={va}>
                                    <Link href={"Personaje/" + va}>
                                        <a href={va}>
                                            <img src={val[va].imagen} alt='./logo192.png' />
                                        </a>
                                    </Link>
                                    <div className='elemento'>
                                        <img src={elementos[val[va].elemento]} alt='./logo192.png' />
                                    </div>
                                    <div>
                                        <Link href={"Personaje/" + va}>
                                            <a href >{va}</a>
                                        </Link>

                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='targeta-epico' key={va}>
                                    <Link href={"Personaje/" + va}>
                                        <a href={va}>
                                            <img src={val[va].imagen} alt='./logo192.png' />
                                        </a>
                                    </Link>
                                    <div className='elemento'>
                                        <img src={elementos[val[va].elemento]} alt='./logo192.png' />
                                    </div>
                                    <div>
                                        <Link href={"Personaje/" + va} >
                                            <a href >{va}</a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    })
                })
            }
        </div>
    )
}

export default Inicio;

