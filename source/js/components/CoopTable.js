import React from 'react';
import firstToUpper from '../services/firstToUpper'
import * as string from '../constants/strings';

const CoopTable = ({data, displayRows}) => {

    return (
        <table className="cmy10">
            <thead>
                <tr>
                    <th>{`ID`}</th>
                    <th>{firstToUpper(string.NAME)}</th>
                    <th>{firstToUpper(string.SHORTNAME)}</th>
                    <th>{firstToUpper(string.ZIP)}</th>
                    <th>{firstToUpper(string.CITY)}</th>
                    <th>{firstToUpper(string.ADDRESS)}</th>
                </tr>
            </thead>
            <tbody>
                {data.map(rows => {
                    return (
                        <tr>
                            {displayRows.map(row => {
                                return(
                                    <td>
                                        {rows[row]}
                                    </td>
                                )}
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CoopTable;
