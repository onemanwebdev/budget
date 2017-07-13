import React from 'react';
import moment from 'moment';
import Table from './components/Table';
import SelectBar from './components/SelectBar';
import SlideBar from './components/SlideBar';
import TimeSpanInfo from './components/TimeSpanInfo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: moment().format('YYYY'),
            month: moment().format('MM'),
            day: null
        };

        this.stateUpdate = this.stateUpdate.bind(this);
    }

    stateUpdate(stateToUpdate, value) {
        this.setState({
            [stateToUpdate]: value
        });
    }

    render() {
        return(
            <div className="container">
                <SelectBar
                    year={this.state.year}
                    month={this.state.month}
                    stateUpdate={this.stateUpdate}
                />
                <SlideBar />
                <TimeSpanInfo
                    year={this.state.year}
                    month={this.state.month}
                />
                <Table />
            </div>
        );
    }
}

export default App;
