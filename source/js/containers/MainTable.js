import React from 'react';
import moment from 'moment';
import BudgetTable from '../components/BudgetTable';
import SelectBar from '../components/SelectBar';
import SlideBar from '../components/SlideBar';
import TimeSpanInfo from '../components/TimeSpanInfo';

class MainTable extends React.Component {
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
                <BudgetTable />
            </div>
        );
    }
}

export default MainTable;
