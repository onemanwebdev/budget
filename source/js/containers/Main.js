import React from 'react';
import { Route } from 'react-router-dom';
import MainTable from './MainTable';
import ServicePage from './ServicePage';

const Main = () => (
    <main> 
        <Route exact path="/" component={MainTable} />
        <Route path="/setup" component={ServicePage} />
    </main>
)

export default Main;
