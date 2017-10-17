import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import SettingsContainer from '../components/SettingsContainer';

const Main = () => (
    <main className="row">
        <div className="col-xs-24">
            <Route exact path="/" component={MainContainer} />
            <Route path="/setup" component={SettingsContainer} />
        </div>
    </main>
)

export default Main
