import React from 'react'
import { Link } from 'react-router-dom';
import * as string from '../constants/strings';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <ul className="col-24-xs cpa15">
                    <li className="cpx10"><Link to="/">{string.BUDGET.toUpperCase()}</Link></li>
                    <li className="cpx10"><Link to="/setup">{string.SETUP.toUpperCase()}</Link></li>
                </ul>
            </div>
        </div>
    </header>
)

export default Header;
