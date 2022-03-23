import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container mx-5">
				<Link to="/">
					<h1 className="text-navbar" style={{"fontFamily":"Lobster, cursive"}}>Wildtrip</h1>
					{/* <img className="icon" src="https://images-eu.ssl-images-amazon.com/images/I/41KOJV21HUL.jpg" /> */}
				</Link>
				<div className="nav-item px-2">
					<Link to="/sing-in">
						<p className="text-navbar">Registrarse</p>
					</Link>
				</div>
				<div className="nav-item px-2">
					<Link to="/log-in">
						<p className="text-navbar">Iniciar sesión</p>
					</Link>
				</div>
				<div className="nav-item px-2">
					<Link to="/form">
						<p className="text-navbar">Respuesta automatizada</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};
