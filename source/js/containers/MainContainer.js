import React from 'react';
import moment from 'moment';
import BudgetTable from '../components/BudgetTable';
import SelectBar from './SelectBar';
import SlideBar from '../components/SlideBar';
import TimeSpanInfo from '../components/TimeSpanInfo';

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            year: moment().format('YYYY'),
            month: moment().format('MM'),
            day: null
        }
    }

    stateUpdate = (stateToUpdate, value) => {
        this.setState({
            [stateToUpdate]: value
        })
    }

    render() {
        return(
            <div className="row">
                <div className="col-xs-fixed">
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
            </div>
        );
    }
}

export default MainContainer
