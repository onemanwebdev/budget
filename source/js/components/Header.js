import React from 'react'
import { Link } from 'react-router-dom';
import * as string from '../constants/strings';

const Header = () => (
    <header className="row header menu">
        <div className="container">
            <div className="row">
                <ul className="col-24-xs">
                    <li><Link to="/">{string.BUDGET}</Link></li>
                    <li><Link to="/setup">{string.SETUP}</Link></li>
                </ul>
            </div>
        </div>
    </header>
)

export default Header
