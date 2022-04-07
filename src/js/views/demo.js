import React, { useState, useEffect, useContext } from "react";
import { Link,Redirect } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="content_of_the_page">
			<div className="container">
				<h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Regístrate como viajero</h1>
				<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif" }}>para poder interactuar con nuestra comunidad 🌳🍂</p>
				<div className="container d-flex justify-content-center row my-3">
					<div id="form" className="justify-content-center d-flex row p-2">
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Apodo</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Usaremos tu apodo para mostrarlo al publico, no uses tu nombre real⛺</p>
						<input 
							placeholder=""
							type="text"
							onChange={actions.handleInputChange}
							name="nickname"
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Nombre</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dejanos aqui tu nombre 🌾</p>
						<input 
							placeholder="Opcional"
							type="text"
							onChange={actions.handleInputChange}
							name="name"
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Apellido</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dejanos aqui tu apellido 🌵</p>
						<input 
							placeholder="Opcional"
							type="text"
							onChange={actions.handleInputChange}
							name="lastname"
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Número de telefono</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dejanos tu número de telefono para saber que eres una persona real 🤖</p>
						<input 
							placeholder=""
							type="text"
							onChange={actions.handleInputChange}
							name="phone_number"
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Correo electrónico</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dirección de correo electrónico 📧</p>
						<input 
							placeholder="Arepa1234@mail.com"
							type="text"
							onChange={actions.handleInputChange}
							name="email"
							></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Contraseña</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Se recomienda usar mayúsculas y números para más seguridad 🔒</p>
						<input 
							placeholder="1234567890 🤡"
							type="text"
							onChange={actions.handleInputChange}
							name="password"
							></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Confirmar contraseña</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Confírmanos tu contraseña 🔐</p>
						<input 
							placeholder=""
							type="text"
							onChange={actions.handleInputChangePasswordConfirm}
							name="password_confirm"						
						></input>
						<input style={{ "width": "500px" }} className="my-3 btn btn-primary" 
							type="button" 
							value="Registrarme"
							resource="/sign-in-traveler"
							name="travelers"
					   		onClick={(e)=>{
								   actions.handleSubmit(e,"/sign-in-traveler")}
								}
								></input>
								{store.passRegister ?
							<Redirect to={"/login"}/>
							:
							""
						}
					</div>
				</div>
			</div>
		</div>
	);
}
