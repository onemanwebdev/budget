import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as string from '../constants/strings'
import Cooperators from '../containers/Cooperators'
import Base from './Base'

const SettingsContainer = ({match}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-24-xs">
                    <ul>
                        <li className=""><Link to={`${match.url}/Cooperators`}>{string.COOPERATORS}</Link></li>
                        <li className=""><Link to={`${match.url}/Base`}>{string.BASE}</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-24-xs">
                    <Route exact path={`${match.url}`} component={Cooperators} />
                    <Route path={`${match.url}/Cooperators`} component={Cooperators} />
                    <Route path={`${match.url}/Base`} component={Base} />
                </div>
            </div>
        </div>
    )
}

export default SettingsContainer
