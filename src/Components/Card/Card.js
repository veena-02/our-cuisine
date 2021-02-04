import React from 'react';
import './Card.css';
const Card=(props)=>{
    return(
        <div className='card'>
            <h1 className='title' >{props.name}</h1>
        </div>
    );
}
export default Card;