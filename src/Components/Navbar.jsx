import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
    const effect = () => {
        const header = document.querySelector('.main-header');
        window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.classList.add('scrolled');
        } else {    
            header.classList.remove('scrolled');
        }
        });
    }
    useEffect(() => effect());

    return (
        <div className="main-header">
            <div className="logo">
                <a href="#">LOGO</a>
            </div>

                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="menu-icon__line"></span>
                </label>
            <ul className="nav-links">
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/Login">About</Link>
                </li>
                <li className="nav-link">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;