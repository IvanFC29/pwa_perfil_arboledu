import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

//Importaciones para el Carousel
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Componente del boton Instalar
import Installer from './Installer.js';

const Home = () => {
    //Navegacion entre paginas
    const navegate = useNavigate();

    const handleRegisterClick = () =>{
        navegate('/mi-jardin');
    };

    // Parte del Carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };    

    return (
        <div className="home-container">
            <Installer />
            <Slider {...settings} className="carousel">
                <div className="carousel-slide">
                    <img src="./img/slide1.png" alt="Plant Care" />
                    <p>Realiza un seguimiento del crecimiento de tus plantas</p>
                </div>
                <div className="carousel-slide">
                    <img src="./img/slide2.png" alt="Tree learning" />
                    <p>Aprende sobre temas educativos respecto a la flora de Cochabamba y todo lo relacionado a las plantas y árboles</p>
                </div>
            </Slider>
            <br></br>
            <div id="botonesHome">
                <button class="init-button" onClick={handleRegisterClick}>Ir a mi jardin</button>
            
            </div>
        </div>
    );
};

export default Home;
