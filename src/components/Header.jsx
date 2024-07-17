import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Activity Feed</Link></li>
                    <li><Link to="/archived">Archived Calls</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
