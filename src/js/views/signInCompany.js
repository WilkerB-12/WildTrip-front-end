import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/demo.css";

export const SignInCompany = () => {
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
						<input
							placeholder=""
							type="text"
							onChange={actions.handleInputChange}
							name="company_name"
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Número de telefono</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dejanos tu número de telefono para que sepamos que eres una compañia real, y que los viajeros puedan contactarte 🤖📱</p>
						<input
							placeholder="+58"
							type="text"
							onChange={actions.handleInputChange}
							name="phone_number"
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Dirección</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Pon la dirección de la empresa para referenciar 🌎</p>
						<input
							placeholder=""
							type="text"
							onChange={actions.handleInputChange}
							name="address"
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Correo electrónico</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dirección de correo electrónico 📧</p>
						<input
							placeholder="Arepa1234@mail.com"
							type="text"
							onChange={actions.handleInputChange}
							name="email"
						></input>
						<div className="d-flex row">
							<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Instagram</h2>
							<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dirección url de tu instagram</p>
						</div>
						<input
							placeholder="Opcional"
							type="text"
							onChange={actions.handleInputChange}
							name="instagram_url"
						></input>
						<h1 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Imagen de perfil </h1>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Coloca el logo de tu empresa 🍃🌴</p>
						<input
							placeholder=""
							type="text"
						></input>
						<h1 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Contraseña</h1>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Se recomienda usar mayúsculas y números para más seguridad 🔒</p>
						<input
							placeholder="1234567890 🤡"
							type="password"
							onChange={actions.handleInputChange}
							name="password"
						></input>
						<h1 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Confirmar contraseña</h1>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Confírmanos tu contraseña 🔐</p>
						<input
							placeholder=""
							type="password"
							onChange={actions.handleInputChangePasswordConfirm}
							name="password_confirm"

						></input>
						<input style={{ "width": "500px" }} className="my-3 btn btn-primary"
							type="button"
							value="Registrar mi compañia"
							name="companies"
							onClick={(e) => {
								actions.handleSubmit(e, "/sign-in-company")
							}
							}
						></input>
						{store.passRegister ?
							<Redirect to={"/login"} />
							:
							""
						}
					</div>
				</div>
			</div>
		</div>)
}