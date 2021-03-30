import React from 'react';
import logo from './../../Assets/brand_logo.png';
import './Footer.css';

function Footer() {
    return (
        <div className="footer_box" style={{backgroundColor: 'black',color: 'white',padding:"12px"}}>
        <div style={{display: 'flex'}}>
            <div style={{width:"46%"}}>
                <img src={logo} alt="our-cuisine" />
                <p>This is a basic footer template that holds lots of links. This is very helpful to win a second chance to let the visitors see again of your important pages. Whatever you want your visitors to visit again, whether it is external resources, important secondary pages,</p>
            </div>
            <div style={{width:"27%"}}>
                <h3>Contacts</h3>
                <ul>
                    <li><a>Email                                            </a></li>
                    <li><a>Phone</a></li>
                    <li><a>Skype                           </a></li>
                    <li><a>Address</a></li>
                </ul>
            </div>
            <div style={{width:"27%"}} >
                <h3>Links</h3>
                <li><a>Home</a></li>
                    <li><a>Phone</a></li>
                    <li><a>Cuisines</a></li>
                    <li><a>ContactUs</a></li>
            </div>   
        </div>
        <div>
            <h3 style={{textAlign: 'center'}}>Made with Love ❤ </h3>
            <p style={{textAlign: 'center'}}>@ Copyright© 2020 - Our Cuisine. All rights reserved</p>
        </div>
        </div>
    )
}

export default Footer;
