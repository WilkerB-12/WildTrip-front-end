import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container mx-5">
				<Link to="/">
					<h1 className="text-navbar" style={{ "fontFamily": "Lobster, cursive" }}>Wildtrip</h1>
					{/* <img className="icon" src="https://images-eu.ssl-images-amazon.com/images/I/41KOJV21HUL.jpg" /> */}
				</Link>
				<div>
					<li className="nav-item dropdown px-2">
						<p className="text-navbar dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Registrarme
						</p>
						<ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
							<Link to="/sing-in-traveler">
								<li><p className="dropdown-item">Registrarme como usuario</p></li>
							</Link>
							<Link to="/sing-in-company">
							<li><p className="dropdown-item">Registrarme como empresa</p></li>
							</Link>
						</ul>
					</li>
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
