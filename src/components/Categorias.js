import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import "../css/Categorias.css";

const categorias = [
    { title: 'Frutales', image: './img/frutales.png', path: '/categorias/frutales' },
    { title: 'Flores', image: './img/flores.png', path: '/categorias/flores' },
    { title: 'Arboles', image: './img/arboles.png', path: '/categorias/arboles' },
];

const Categorias = () => {
    const navegacion = useNavigate();

    const targetaClic = (path) => {
        navegacion(path);
    };

    return(
      <div className="inicio-container">
       <div id="cabecera-inicio">
           <img src="icon-192x192.png" width="64px" alt="logo"></img>
             <p>ArbolEdu</p>
        </div>
        <hr />
        <div id="contenido">
            <h2>Categorias</h2>
            <div className="target-categorias">
                {categorias.map((categoria, index) => (
                    <Card key={index} className="categoria-card" onClick={() => targetaClic(categoria.path)}>
                        <CardActionArea>
                            <img src={categoria.image} alt={categoria.title} />
                            <CardContent className="categoria-content">
                                <Typography gutterBottom variant="h5" component="div">
                                    {categoria.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>

            {/*<Button variant="contained" className="btn-volver" onClick={() => navegacion(-1)}>
                 Volver
            </Button>*/}
        </div>
      </div>
    );
};

export default Categorias;
