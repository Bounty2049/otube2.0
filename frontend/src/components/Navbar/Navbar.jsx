import React from 'react';
import './Navbar.css'

export default function Navbar() {
    return (  
        <nav className='navbar'>
            <div className="logo">
                <a href="/">OTube 2.0</a> 
                <a href="/catalog" className='catalog'>Catalog</a>
            </div>
            <ul className="nav-links">
                <li><a href="/create-product">Create Product</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/profile">Profile</a></li>
                <li className="dropdown">
                    <a href="/login" className="dropbtn">Login/Sign Up</a>
                    <div className="dropdown-content">
                        <a href="/login">Login</a>
                        <a href="/signup">Sign Up</a>
                    </div>
                </li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
}

 