/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Card.css";
import placeholder from "../../assets/placeholder.png"

const placeholderImage = placeholder;


export const Card = ({
    imgSrc,
    imgAlt,
    title,
    cena,
    description,
    buttonText,
    link,
}) => {
    const imageSource = imgSrc || placeholderImage;

    return (
        <div className="card-container">

            <img src={imageSource} alt={imgAlt} className="card-img" />

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