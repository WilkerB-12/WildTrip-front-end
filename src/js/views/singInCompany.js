import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SingInCompany = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="content_of_the_page">
			<div className="container">
				<h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Regístrate como compañia</h1>
				<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif" }}>para poder ofrecer actividades en la naturaleza 🌳🍂</p>
                <div className="container d-flex justify-content-center row my-3">
					<div id="form" className="justify-content-center d-flex row p-2">
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Nombre de la compañia</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Usaremos tu nombre para mostrarlo al publico ⛺</p>
						<input placeholder=""></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Número de telefono</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dejanos tu número de telefono para que sepamos que eres una compañia real, y que los viajeros puedan contactarte 🤖📱</p>
						<input placeholder="Suarez"></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Dirección</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Pon la dirección de la empresa para referenciar 🌎</p>
						<input placeholder=""></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Correo electrónico</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dirección de correo electrónico 📧</p>
						<input placeholder="Arepa1234@mail.com"></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Contraseña</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Se recomienda usar mayúsculas y números para más seguridad 🔒</p>
						<input placeholder="1234567890 🤡"></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Confirmar contraseña</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Confírmanos tu contraseña 🔐</p>
						<input placeholder=""></input>
						<input style={{ "width": "500px" }} className="my-3 btn btn-primary" type="submit" value="Registrar mi compañia"></input>
					</div>
				</div>
            </div>
        </div>)}