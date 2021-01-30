import React from 'react';
import Navbar from './Navbar';
import '../scss/Media.scss'
import '../scss/Header.scss'
import '../scss/App.scss'

function Header() {
    return (
        <header className="app-header">
            <Navbar />
        </header>
    )
}
export default Header;