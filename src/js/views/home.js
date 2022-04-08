import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Post } from "../component/post";
import { Link,useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	let token=actions.isAuthenticated();
	return (
		<><div className="content_of_the_page py-0 mx-0 mt-0 w-100 ">
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators py-0">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.tacdn.com/media/attractions-content--1x-1/0b/39/9e/c5.jpg" className="d-block w-100"style={{"height":"540px"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 >Sabana</h2>
        <p>Disfruta una relajante desconexión en los tepuyes sagrados</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Venezuela_-_Mochima_-_Playa_Colorada.jpg" className="d-block w-100"style={{"height":"540px"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Playa</h2>
        <p>Una increíble vista en la playa</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.enextremo.com/wp-content/uploads/2018/03/Rafting_Acequia-1280x620.jpg" className="d-block w-100"style={{"height":"540px"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Deportes extremos</h2>
        <p>O una aventura llena de adrenalina</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
		</div>
		<div className="content_of_the_page my-0">
			<div className="text-center my-5">
				{store.all_post.map((post, index) => {
					return <Post
						key={post.id}
						item={post} />
				})}
			</div>
			{token==true?
			<div className="mx-5 my-5" style={{ "position": "fixed", "top": "65%", "left": "85%" }}>
				<Link to="create-post">
					<div className="boton-para-crear-post">
						<h1 style={{ "display": "flex", "paddingTop": "12%", "justifyContent": "center", "color": "black" }}>+</h1>
					</div>
				</Link>
			</div>
			 :""}
		</div>
		</>
	)
}
