import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from 'axios';
import "../css/Register.css";

const Register = () => {
    let [nombre, setNombre] = useState(''); // Actualizar nombre
    let [clave, setClave] = useState('');  // Actualizar password
    let [correo, setCorreo] = useState('');  // Actualizar correo

    // Navegacion entre paginas 
    const navegate = useNavigate();

    const handleRegisterClick = () =>{
        navegate('/mi-jardin');
    };

    //Verificacion de registro de un usuario
    const handleVerificar = async(e) => {
        e.preventDefault();
        const respuesta = await axios.post('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre, clave, correo}),
        });

        if (respuesta.ok) {
            alert('Usuario registrado exitosamente');
        } else {
            alert('Error al registrar usuario');
        }
    };

    return(   
        <div className="register-container">
            <div id="cabecera-register">
                <img src="icon-192x192.png" width="64px" alt="logo"></img>
                <p>ArbolEdu</p>
            </div>
            <div id="parrafo"><p>Podras guardar un registro de tus plantas y recibir notificaciones y consejos para su cuidado</p> </div>
            <h3>Registro</h3>
                <form className="form-container" onSubmit={handleVerificar}>
                    <label className="form-label" htmlFor="nombre">Nombre:</label>
                    <input className="form-control" type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>

                    <label className="form-label" htmlFor="clave">Contraseña:</label>
                    <input className="form-control" type="password" id="clave" name="clave" value={clave} onChange={(e) => setClave(e.target.value)} required></input>

                    <label className="form-label" htmlFor="correo">Correo:</label>
                    <input className="form-control" type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required></input>

                    <button type="submit" className="confirm-button" onClick={handleRegisterClick}>Confirmar</button>
                </form>
        </div>
        
    ); 
}; 

export default Register

