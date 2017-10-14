import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as string from '../constants/strings'
import Cooperators from '../containers/Cooperators'
import Base from './Base'

const SettingsContainer = ({match}) => {
    return[
        <div key="1" className="row">
            <div className="col-xs-fixed">
                <nav>
                    <ul>
                        <li className="text-content"><Link to={`${match.url}/Cooperators`}>{string.COOPERATORS}</Link></li>
                        <li className="text-content"><Link to={`${match.url}/Base`}>{string.BASE}</Link></li>
                    </ul>
                </nav>
            </div>
        </div>,
        <div key="2" className="row">
            <div className="col-xs-fixed">
                <Route exact path={`${match.url}`} component={Cooperators} />
                <Route path={`${match.url}/Cooperators`} component={Cooperators} />
                <Route path={`${match.url}/Base`} component={Base} />
            </div>
        </div>
    ]
}

export default SettingsContainer
