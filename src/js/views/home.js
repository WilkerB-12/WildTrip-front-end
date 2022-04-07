import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Post } from "../component/post";
import { Link } from "react-router-dom";


export const Home = () => (
	<div className="content_of_the_page">
		<div className="text-center my-5">
			<Post />
			<Post />
			<Post />
		</div>
		<div className="mx-5 my-5" style={{ "position": "fixed", "top": "65%", "left": "85%" }}>
			<Link to="create-post">
				<div className="boton-para-crear-post">
					<h1 style={{ "display": "flex", "paddingTop": "12%", "justifyContent": "center", "color": "black" }}>+</h1>
				</div>
			</Link>
		</div>
	</div>
);
