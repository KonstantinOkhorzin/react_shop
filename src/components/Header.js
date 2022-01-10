import React from 'react';

function Header(props) {
    return (
        <nav className='green darken-1'>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#" target="_blank">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;