import React from 'react';
import * as string from '../constants/strings';

const CoopTable = (props) => (
    <table>
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
            <tr>
                <td colSpan="99">{props.data}</td>
            </tr>
        </tbody>
    </table>
)

export default CoopTable;
