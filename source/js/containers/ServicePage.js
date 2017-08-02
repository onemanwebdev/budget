import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as string from '../constants/strings';
import Cooperators from './Cooperators'
import Base from './Base'

const ServicePage = ({match}) => {
    return(
        <div className="container">
            <div className="row TESTsubmenu">
                <ul>
                    <li className="cpx15"><Link to={`${match.url}/Cooperators`}>{string.COOPERATORS}</Link></li>
                    <li className="cpx15"><Link to={`${match.url}/Base`}>{string.BASE}</Link></li>
                </ul>
            </div>
            <div className="row">
                <Route exact path={`${match.url}`} component={Cooperators} />
                <Route path={`${match.url}/Cooperators`} component={Cooperators} />
                <Route path={`${match.url}/Base`} component={Base} />
            </div>
        </div>
    )
}

export default ServicePage;
