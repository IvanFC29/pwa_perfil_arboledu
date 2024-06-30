import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import datosPlantas from '../data/datosPlantas.json';
import { useMiJardin } from '../context/MiJardinContenedor';
import "../css/Planta.css";

const Planta = () => {
  const { categoria, id } = useParams();
  const navegacion = useNavigate();
  const { agregarPlanta } = useMiJardin();
  const planta = datosPlantas[categoria]?.find(p => p.id === id);

  return (
    <div className="inicio-container">
        <div id="cabecera-inicio">
           <img src="/icon-192x192.png" width="64px" alt="logo"></img>
             <p>ArbolEdu</p>
        </div>
        <hr />
        <div id="contenido">
            {planta ? (
            <>
                <img src={planta.imagen} alt={planta.nombre} />
                <h2>{planta.nombre}</h2>
                <p>{planta.descripcion}</p>
                <button className="agregar-planta-button" onClick={() => agregarPlanta(planta, navegacion)}>Agregar a mi Jardín</button>
            </>
            ) : (
            <p>Planta no encontrada</p>
            )}
        </div>
    </div>
  );
};

export default Planta;
