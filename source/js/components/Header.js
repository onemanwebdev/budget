import React from 'react'
import { Link } from 'react-router-dom';
import * as string from '../constants/strings';

const Header = () => (
    <header className="row">
        <div className="col-xs-fixed">
            <nav>
                <ul>
                    <li className="text-content"><Link to="/">{string.BUDGET}</Link></li>
                    <li className="text-content"><Link to="/setup">{string.SETUP}</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
