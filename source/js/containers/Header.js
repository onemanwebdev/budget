import React from 'react'
import { Link } from 'react-router-dom';
import * as string from '../constants/strings';

const Header = () => (
    <div>
        <ul>
            <li><Link to="/">{string.BUDGET}</Link></li>
            <li><Link to="/setup">{string.SETUP}</Link></li>
        </ul>
    </div>
)

export default Header;
