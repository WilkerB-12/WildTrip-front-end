import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import propTypes from "prop-types";

export const Post = ({ item }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="post my-5 d-flex justify-content-center">
            <div className="card" style={{ "width": "700px" }}>
                <div className="list-group-item">
                    <h5 className="card-title">{item.company_name}</h5>
                </div>
                <img src={item.cloudinary_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Teléfono de contacto {item.phone_number}</p>
                    <p className="card-text">Fecha del viaje: {item.date}</p>
                </div>
            </div>
        </div>
    )
}
Post.propTypes={
    item:propTypes.object,
}