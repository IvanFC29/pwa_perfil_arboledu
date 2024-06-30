import React, { createContext, useState, useContext, useEffect } from 'react';

const MiJardinContenedor = createContext();

export const MiJardinProvider = ({ children }) => {
    const [misPlantas, setMisPlantas] = useState(() => {
        //Guardar datos en cache - temporal hasta implemenmtar una base de datos.
        const guardarPlanta = localStorage.getItem('misPlantas');
        return guardarPlanta ? JSON.parse(guardarPlanta) : [];
    });

    const agregarPlanta = (planta, navegacion) => {
        setMisPlantas((prev) => {
            const nuevaPlanta =  [...prev, planta];
            localStorage.setItem('misPlantas', JSON.stringify(nuevaPlanta));
            if (navegacion){
                navegacion('/mi-jardin');
            }
            return nuevaPlanta;
        });
    };

     // Efecto para guardar las plantas en localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem('misPlantas', JSON.stringify(misPlantas));
    }, [misPlantas]);

    return (
        <MiJardinContenedor.Provider value={{ misPlantas, agregarPlanta }}>
            {children}
        </MiJardinContenedor.Provider>
    );
};

export const useMiJardin = () => {
    return useContext(MiJardinContenedor);
};
