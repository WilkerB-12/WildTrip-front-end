import React,{useContext} from "react";
import { Link,useHistory } from "react-router-dom";
import { Profile } from "../views/profile";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history=useHistory();
	let token=actions.isAuthenticated()
	return (
		<nav className="navbar navbar-light bg-light mb-0">
			<div className="d-flex mx-5" style={{ "width": "100vw" }}>

				<Link to="/">
					<h1 className="text-navbar px-2" style={{ "fontFamily": "Lobster, cursive" }}>Wildtrip</h1>
					{/* <img className="icon" src="https://images-eu.ssl-images-amazon.com/images/I/41KOJV21HUL.jpg" /> */}
				</Link>

				{token == false ?
					<>
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
									<p className="text-navbar px-2" style={{ "width": "140px" }}>Iniciar sesión</p>
								</Link>
							</div>
						</div>
					</>
					:
					<>
						<div className="px-2">
							<div className="nav-item px-2">
							<button type="button" className="btn btn-light"
							onClick={(e)=>{actions.removeUser()
								let token=actions.isAuthenticated()
								history.push("/")
							}}
							>Cerrar sesión</button>
							</div>
						</div>
						<div style={{ "width": "100%", "display": "flex", "justifyContent": "end" }}>
							<Link to={"/profile/" + localStorage.getItem("user_id")}>
								<div className="foto_de_perfil_navbar">
										<img className="foto_de_perfil_navbar" src={"https://pbs.twimg.com/profile_images/1410575489681571840/AyfTF5db_400x400.jpg"} />
								</div>
							</Link>
						</div>
					</>
				}
			</div>
		</nav>
	);
};
