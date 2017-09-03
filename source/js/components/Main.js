import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import SettingsContainer from '../components/SettingsContainer';

const Main = () => (
    <main className="main">
        <Route exact path="/" component={MainContainer} />
        <Route path="/setup" component={SettingsContainer} />
    </main>
)

export default Main
