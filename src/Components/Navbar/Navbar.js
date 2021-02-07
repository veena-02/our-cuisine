import React from 'react';
import { NavLink } from 'react-router-dom';
import img from 'C:/Users/hp/Develop/our-cuisine/src/Assets/brand_logo.png';
import './Navbar.css';

const Navbar=()=>{
    return(
        <>
        <div style={{height:"10px",backgroundColor:"black"}}></div>
        <div className="navbar">
        <NavLink
            className="link" 
            exact activeClassName="active_link"
            to='/'>    
            <img src={img} height='90px' width='100px' />
        </NavLink>
        <NavLink
            className="link" 
            exact activeClassName="active_link"
            to='/'>    
            Home
        </NavLink>
        <NavLink
            className="link" 
            exact activeClassName="active_link"
            to='/Categories'>    
            Categories
        </NavLink>
        <NavLink
            className="link" 
            exact activeClassName="active_link"
            to='/Cuisines'>    
            Cuisines
        </NavLink>
        </div>
        </>
    );
}
export default Navbar;