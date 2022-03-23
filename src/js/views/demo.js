import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="content_of_the_page">
			<div className="container">
				<h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Regístrate</h1>
				<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif" }}>para obtener funciones nuevas y encontrar la computadora que necesitas 💻✨</p>
			</div>
			<div className="container d-flex justify-content-center row my-3">
				<div id="form" className="justify-content-center d-flex row p-2">
					<h1 style={{"paddingTop": "20px", "fontFamily":"Raleway, sans-serif"}}>Nombre de Usuario</h1>
					<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Nunca uses tu nombre real, mejor usa un apodo 👍</p>
					<input placeholder="Carlos"></input>
					<h1 style={{"paddingTop": "20px", "fontFamily":"Raleway, sans-serif"}}>Correo electrónico</h1>
					<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dirección de correo electrónico 📧</p>
					<input placeholder="Arepa1234@mail.com"></input>
					<h1 style={{"paddingTop": "20px", "fontFamily":"Raleway, sans-serif"}}>Contraseña</h1>
					<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Se recomienda usar mayúsculas y números para más seguridad 🔒</p>
					<input placeholder="1234567890 🤡"></input>
					<h1 style={{"paddingTop": "20px", "fontFamily":"Raleway, sans-serif"}}>Confirmar contraseña</h1>
					<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Confírmanos tu contraseña 🔐</p>
					<input placeholder=""></input>
					<input style={{"width":"500px"}} className="my-3 btn btn-primary" type="submit" value="Registrarme"></input>
				</div>
				<div className="d-flex justify-content-center align-items-center col">
					<div className="lineas"></div>
					<p>o</p>
					<div className="lineas"></div>
				</div>
			</div>
		</div>
	);
};
