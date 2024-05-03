/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Title.css'

const Title = ({ subTitle, title }) => {
    return (
        <div className='title'>
            <h2>{title}</h2>
            <p>{subTitle}</p>

        </div>
    )
}

export default Title;
