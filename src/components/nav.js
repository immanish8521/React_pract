import React from 'react';
import './nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <div className='main-heading'>
                <h2>React</h2>
            </div>
            <div className='nav-bar'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
