import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import SettingsContainer from '../components/SettingsContainer';
import Color from '../components/Color';

const Main = () => (
    <main className="row">
        <div className="col-xs-24">
            <Route exact path="/" component={MainContainer} />
            <Route path="/setup" component={SettingsContainer} />
            <Route path="/color" component={Color} />
        </div>
    </main>
)

export default Main
