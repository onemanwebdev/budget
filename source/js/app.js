import React from 'react';
import moment from 'moment';
import Table from './components/Table'
import SelectBar from './components/SelectBar'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: moment().format('YYYY'),
            month: moment().format('MM')
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
                <Table
                    year={this.state.year}
                    month={this.state.month}
                />
            </div>
        );
    }
}

export default App;
