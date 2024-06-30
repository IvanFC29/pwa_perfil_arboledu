import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import datosPlantas from '../data/datosPlantas.json';
import "../css/Categorias.css";

const Elemento = () => {
  const { categoria } = useParams();
  
  const navegacion = useNavigate();
  const plantas = datosPlantas[categoria] || [];

  const handleCardClick = (plantaId) => {
    navegacion(`/categorias/${categoria}/${plantaId}`);
  };

  return (
    <div className="inicio-container">
        <div id="cabecera-inicio">
           <img src="/icon-192x192.png" width="64px" alt="logo"></img>
             <p>ArbolEdu</p>
        </div>
        <hr />
        <h2>{categoria}</h2>
        <div className="target-categorias">
            {plantas.map((planta, index) => (
              <Card key={index} className="categoria-card" onClick={() => handleCardClick(planta.id)}>
                <CardActionArea>
                  <img src={planta.imagen} alt={planta.nombre} />
                  <CardContent className="categoria-content">
                    <Typography gutterBottom variant="h5" component="div">
                      {planta.nombre}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Elemento;
