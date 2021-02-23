import React from 'react';
import {NavLink} from 'react-router-dom';
import './Card.css';
const Card=(props)=>{
    const cusName=props.name;
    return(
        <>
        {
            (props.query==='c')?
                <NavLink 
                    to={`/Categories/${cusName}`}
                    className='card'>
                    <h1 className='title' >{props.name}</h1>
                </NavLink>:
                <NavLink 
                    to={`/Cuisines/${cusName}`}
                    className='card'>
                    <h1 className='title' >{props.name}</h1>
                </NavLink>
        }
        </>
    );
}
export default Card;


