import React from 'react';
import '../css/MiJardin.css';
import BottomNav from './MenuInferior';
import { useNavigate } from 'react-router-dom';

const MiJardin  = () => {

    const navegacion = useNavigate();

    const cambiarVista = () =>{
        navegacion('/categorias');
    };

    return(
        <div className="inicio-container">
            <div id="cabecera-inicio">
                <img src="icon-192x192.png" width="64px" alt="logo"></img>
                <p>ArbolEdu</p>
            </div>
            <hr />
            <div id="contenido">
                <p>¿No sabes que plantar?</p>
                <p>Recibe consejos y agrega tu primera planta</p>
                <button className="agregar-planta-button" onClick={cambiarVista}>+ Agregar Planta</button>
            </div>
            <BottomNav />
        </div>
    );
};

export default MiJardin