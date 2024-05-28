import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/Home.css';

const Home = () => {
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
            <Slider {...settings} className="carousel">
                <div className="carousel-slide">
                    <img src="./img/slide1.png" alt="Plant Care" />
                    <p>Realiza un seguimiento de como crecen tus plantas</p>
                </div>
                <div className="carousel-slide">
                    <img src="./img/slide2.png" alt="Tree learning" />
                    <p>Aprende sobre temas educativos respecto a la flora de Cochabamba y todo lo relacionado a las plantas y árboles</p>
                </div>
                {/* Agrega más slides según sea necesario */}
            </Slider>
        </div>
    );
};

export default Home;
