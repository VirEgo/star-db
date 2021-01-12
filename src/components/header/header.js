import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-title">Star DB</div>
            <div className="nav-list">
                <ul>
                    <li><a href="/people">People</a></li>
                    <li><a href="/planets">Planets</a></li>
                    <li><a href="/starships">Starships</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;