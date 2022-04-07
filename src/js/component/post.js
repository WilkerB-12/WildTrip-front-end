import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Post = ({ item }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="post my-5 d-flex justify-content-center">
            <div className="card" style={{ "width": "700px" }}>
                <div className="list-group-item">
                    <h5 className="card-title">{"{item.company}"}</h5>
                </div>
                <img src={"{item.img}"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{"{item.title}"}</h5>
                    <p className="card-text">{"{item.description}"}</p>
                </div>
            </div>
        </div>
    )
}