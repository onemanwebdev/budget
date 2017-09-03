import React from 'react'
import * as string from '../constants/strings';

const TimeSpanInfo = (props) => {
    return (
        <div className="row">
            <div className="col-16-xs">
                <p>{`${string.SELECTED_PERIOD}: ${props.month} ${props.year}`}</p>
            </div>
        </div>
    )
}

export default TimeSpanInfo
