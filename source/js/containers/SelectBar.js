import React from 'react';
import { MONTHS } from '../constants/calendarTypes';

class SelectBar extends React.Component {
    constructor(props) {
        super(props)

        this.monthArray = Object.values(MONTHS)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.className]: e.target.value
        })
        this.props.stateUpdate(e.target.className, e.target.value)
    }

    days() {
        const days = [];
        for(let i = 1; i <= 28; i++) {
            days.push(<option key={i}>{i}</option>)
        }
        return days
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-9"></div>
                <div className="col-xs-2">
                    <select>
                        {this.days()}
                    </select>
                </div>
                <div className="col-xs-2">
                    <select className="month" value={this.props.month} onChange={this.handleChange}>
                        {this.monthArray.map((monthNumber) =>
                            <option key={monthNumber.zeroNumber} value={monthNumber.zeroNumber}>{monthNumber.plName}</option>
                        )}
                    </select>
                </div>
                <div className="col-xs-2">
                    <select className="year" value={this.props.year} onChange={this.handleChange}>
                        <option key="2017" value="2017">2017</option>
                        <option key="2016" value="2016">2016</option>
                        <option key="2015" value="2015">2015</option>
                    </select>
                </div>
                <div className="col-xs-9"></div>
            </div>
        )
    }
}

export default SelectBar
