import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SingInCompany } from "./views/singInCompany";
import { Login } from "./views/login";
import { Profile } from "./views/profile";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/sing-in-traveler">
							<Demo />
						</Route>
						<Route exact path="/sing-in-company">
							<SingInCompany />
						</Route>
						<Route exact path="/log-in">
							<Login />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/profile">{/*Falta poner el :id*/}
							<Profile/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
