import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Post } from "../component/post";

export const Profile = ({ item }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="content_of_the_page">
            {/* <div className="container">
                <h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Perfil de</h1>
                <div className="foto_de_perfil">
                    <img src={"url + `${item.id}.jpg`"} />
                </div>
                <h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>{"{item.nick}"}</h2>
                <p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}> {"{item.name}" + " {item.lastname}"}</p>
            </div> */}
            <div className="container justify-content-center d-flex row">
                <div className="d-flex  justify-content-center">
                    <img className="foto_de_perfil" src={"https://pbs.twimg.com/profile_images/1410575489681571840/AyfTF5db_400x400.jpg"} />
                </div>
                <h1 className="justify-content-center d-flex" style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Viajes Wilker y Esteban</h1>
                <p className="justify-content-center d-flex" style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "10px" }}> {"Instagram:" + "Esta compañia no tiene instagram"}</p>
                <p className="justify-content-center d-flex" style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "10px" }}> {"dirección:" + "urb. Las mercedez ed. Paseo Avila"}</p>
                <p className="justify-content-center d-flex" style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "10px" }}> {"número de telefono: " + "+58 412-1234567"}</p>
                {/* <div>
                    <Post/>
                </div> */}
            </div>
        </div>
    )
}
Profile.propTypes = {
    item:PropTypes.object
}