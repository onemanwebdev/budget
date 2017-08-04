import React from 'react';
import firstToUpper from '../services/firstToUpper'
import * as string from '../constants/strings';

const CoopTable = ({data, displayRows}) => {
    return (
        <table className="cmy10">
            <thead>
                <tr>
                    <th>{`ID`}</th>
                    <th>{string.NAME}</th>
                    <th>{string.SHORTNAME}</th>
                    <th>{string.ZIP}</th>
                    <th>{string.CITY}</th>
                    <th>{string.ADDRESS}</th>
                </tr>
            </thead>
            <tbody>
                {data.map((rows, index) => {
                    return (
                        <tr key={index}>
                            {displayRows.map((row, index) => {
                                return(
                                    <td key={index}>
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
