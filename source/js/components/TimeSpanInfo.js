import React from 'react'
import * as string from '../constants/strings';

const TimeSpanInfo = (props) => {
    return (
        <div className="row">
            <div className="col-xs-24">
                <span className="text-content">{`${string.SELECTED_PERIOD}: ${props.month} ${props.year}`}</span>
            </div>
        </div>
    )
}

export default TimeSpanInfo
