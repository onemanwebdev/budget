import React from 'react';
import * as string from '../constants/strings';

class TimeSpanInfo extends React.Component {
    render() {
        return (
            <div className="col-16-xs">
                {`${string.SELECTED_PERIOD}: ${this.props.month} ${this.props.year}`}
            </div>
        )
    }
}

export default TimeSpanInfo;
