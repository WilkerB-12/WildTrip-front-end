import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Post } from "../component/post";

export const Profile = ({ item }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="content_of_the_page">
            <div className="container">
                <h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Perfil de {"{item.nick}"}</h1>
                <div className="foto_de_perfil">
                    <img src={"url + `${item.id}.jpg`"} />
                </div>
                <h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>{"{item.nick}"}</h2>
                <p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}> {"{item.name}" + " {item.lastname}"}</p>
            </div>
            <div className="container justify-content-center d-flex row">
                <div className="foto_de_perfil">
                    <img src={"url + `${item.id}.jpg`"} />
                </div>
                <h1 className="justify-content-center d-flex" style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>{"{item.company-name}"}</h1>
                <p className="justify-content-center d-flex" style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "10px" }}> {"Instagram:" + " {item.instagram-url}"}</p>
                <p className="justify-content-center d-flex" style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "10px" }}> {"Instagram:" + " {item.address}"}</p>
                <div>
                    <Post/>
                </div>
            </div>
        </div>
    )
}