import React from 'react';
import '../css/MiJardin.css';
import BottomNav from './MenuInferior';
import { useNavigate } from 'react-router-dom';
import { useMiJardin } from '../context/MiJardinContenedor';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

const MiJardin  = () => {
    const navegacion = useNavigate();
    const { misPlantas } = useMiJardin();

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
                {misPlantas.length === 0? (
                    <>
                        <p>¿No sabes que plantar?</p>
                        <p>Recibe consejos y agrega tu primera planta</p>
                        <button className="agregar-planta-button" onClick={cambiarVista}>+ Agregar Planta</button>
                    </>
                ):(
                  <div id='jardin'> 
                    <button className="agregar-planta-button" onClick={cambiarVista}>+ Agregar Planta</button>
                    
                    <div className="target-categorias">
                        {misPlantas.map((planta, index) => (
                            <Card key={index} className="categoria-card">
                                <CardActionArea>
                                    <CardContent className="categoria-content">
                                        <img id='img_jardin' src={planta.imagen} alt={planta.nombre} />
                                    </CardContent>
                                    <CardContent className="categoria-content"> 
                                        <p>{planta.nombre}</p>  
                                        <button className="agregar-recordatorio-button" onClick={cambiarVista}>Agregar recordatorio</button>
                                    </CardContent>
                                </CardActionArea>   
                            </Card>    
                        ))}
                    </div>
                  </div>   
                )}
                
            </div>
            <BottomNav />
        </div>
    );
};

export default MiJardin