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
            {console.log(props.data)}//do uporządkowania formatowanie danych i można wyświetlać
        </tbody>
    </table>
)

export default CoopTable;
