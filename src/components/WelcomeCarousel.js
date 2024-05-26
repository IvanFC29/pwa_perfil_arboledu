// src/components/WelcomeCarousel.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import '../css/WelcomeCarousel.css'; 

const WelcomeCarousel = () => {
    return (
        <Carousel 
           showThumbs={false} 
           showStatus={false} 
           infiniteLoop 
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = { marginLeft: 5, color: "#c4c4c4", cursor: "pointer" };
                const style = isSelected ? { ...defStyle, color: "#ffcc00" } : defStyle;
                return (
                    <span
                        style={style}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                    >
                        ●
                    </span>
                );
            }}
            
            // Boton de siguiente
            renderArrowNext={(onClickHandler, hasNext, label) => 
                hasNext && (
                    <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-next">
                        ➔
                    </button>
                )
            }
        >
            <div className="carousel-slide green-bg">
                <img src="logo192.png" alt="Slide 1" className="carousel-image"/>
                <p className="legend">Bienvenido a tu aplicación de aprendizaje y cuidado de plantas y árboles</p>
            </div>
            <div className="carousel-slide green-bg">
                <img src="logo192.png" alt="Slide 2" className='carousel-image'/>
                <p className="legend">Realiza un seguimiento de cómo crecen tus plantas</p>
            </div>
            <div className="carousel-slide green-bg">
                <img src="logo512.png" alt="Slide 3" className='carousel-image'/>
                <p className="legend">Aprende sobre temas educativos respecto a la flora de Cochabamba y todo lo relacionado a las plantas y árboles</p>
            </div>
        </Carousel>
    );
}

export default WelcomeCarousel;
