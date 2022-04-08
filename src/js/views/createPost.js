import React, { useState, useEffect, useContext } from "react";
import { Link,  useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/demo.css";

export const CreatePost = () => {
	const { store, actions } = useContext(Context);
	const history=useHistory();
	return (
		<div className="content_of_the_page">
			<div className="container">
				<h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Sube tu publicación :)</h1>
				<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif" }}>para que nuestros viajeros puedan asistir 🍂</p>
				<div className="container d-flex justify-content-center row my-3">
					<div id="form" className="justify-content-center d-flex row p-2">
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Titulo de la publicación</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Usaremos este titulo para que nuestros viajeros sepan de que va tu viaje ⛺</p>
						<input
							placeholder=""
							type="text"
							name="title"
							onChange={actions.handleInputChangePost}
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Nombre de tu compañía </h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>coloca aquí el nombre de tu empresa🎒🍂</p>
						<input
							placeholder=""
							type="text"
							name="company_name"
							onChange={actions.handleInputChangePost}
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Fecha </h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>coloca aquí la fecha de tu aventura 📅</p>
						<input
							placeholder=""
							type="text"
							name="date"
							onChange={actions.handleInputChangePost}
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Teléfono </h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>coloca aca tu teléfono de contacto </p>
						<input
							placeholder=""
							type="text"
							name="phone_number"
							onChange={actions.handleInputChangePost}
						></input>
												<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Descripción de la publicación </h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dejanos una breve descripción de que va tu viaje, asi nuestros usuarios podran saber de que trata, y llames la atención 🍃🌴</p>
						<textarea
							className="mb-3"
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder=""
							type="text"
							name="description"
							onChange={actions.handleInputChangePost}
						></textarea>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Imagen de tu publicación </h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>coloca aca el link de una imagen que quieras poner en la publicación 📷🍃</p>
						<input
							placeholder=""
							type="text"
							name="cloudinary_url"
							onChange={actions.handleInputChangePost}
						></input>
						<input style={{ "width": "500px" }} className="my-3 btn btn-primary"
							type="button"
							value="Publicar"
							onClick={async(e)=>{
								let respuesta= await actions.createPost(e,"/posts");
								if (respuesta){
									actions.getPosts()
									history.push("/")
								}
							}}
						></input>
					</div>
				</div>
			</div>
		</div>)
}