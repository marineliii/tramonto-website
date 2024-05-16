/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Card.css";



export const Card = ({
    imgSrc,
    imgAlt,
    title,
    cena,
    description,
    buttonText,
    link,
}) => {

    return (
        <div className="card-container">
            {imgSrc && (
                <img src={imgSrc} alt={imgAlt} className="card-img" />
            )}
            <div className="ime-i-cena">
                {title && <h1 className="card-title">{title}</h1>}
                {cena && <h1 className="card-cena">{cena}  </h1>}

            </div>
            {description && <p className="card-description">{description}</p>}
            {buttonText && link && (
                <a href={link} className="card-btn ">
                    {buttonText}
                </a>
            )}
        </div>
    );
};