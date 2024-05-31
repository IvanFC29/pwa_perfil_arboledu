import React from "react";
import "../css/Register.css";

const Register = () => {
    return(
        <div className="register-container">
            <h3>Registro</h3>
                <form className="form-container">
                    <label className="form-label" htmlFor="nombre">Nombre:</label>
                    <input className="form-control" type="text" id="nombre" name="nombre" required></input>

                    <label className="form-label" htmlFor="clave">Contraseña:</label>
                    <input className="form-control" type="password" id="clave" name="clave" required></input>

                    <label className="form-label" htmlFor="correo">Correo:</label>
                    <input className="form-control" type="email" id="correo" name="correo" required></input>

                    <button type="submit" className="confirm-button">Confirmar</button>
                </form>
        </div>
        
    ); 
}; 

export default Register

