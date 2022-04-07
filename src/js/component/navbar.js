import React from "react";
import { Link } from "react-router-dom";
import { Profile } from "../views/profile";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="d-flex mx-5" style={{"width":"100vw"}}>

				<Link to="/">
					<h1 className="text-navbar px-2" style={{ "fontFamily": "Lobster, cursive" }}>Wildtrip</h1>
					{/* <img className="icon" src="https://images-eu.ssl-images-amazon.com/images/I/41KOJV21HUL.jpg" /> */}
				</Link>
				<div className="px-2">
					<li className="nav-item dropdown px-2">
						<p className="text-navbar dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Registrarme
						</p>
						<ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
							<Link to="/sign-in-traveler">
								<li><p className="dropdown-item">Registrarme como usuario</p></li>
							</Link>
							<Link to="/sign-in-company">
								<li><p className="dropdown-item">Registrarme como empresa</p></li>
							</Link>
						</ul>
					</li>
				</div>
				<div className="px-2">
					<div className="nav-item px-2">
						<Link to="/login">
							<p className="text-navbar px-2" style={{"width":"140px"}}>Iniciar sesión</p>
						</Link>
					</div>
				</div>

				<div style={{"width":"100%", "display":"flex", "justifyContent":"end" }}>
					<Link to="/profile">
						<div className="foto_de_perfil_navbar">
							<img src={"url + `${item.id}.jpg`"} />
						</div>
					</Link>
				</div>

			</div>
		</nav>
	);
};
