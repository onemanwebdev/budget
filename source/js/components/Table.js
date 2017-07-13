import React from 'react'
/*import ContentTable from './ContentTable'*/
import * as string from '../constants/strings';
import api from '../services/api';

class Table extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-24-xs">
                    <table className="mainTable">
                        <thead>
                            <tr>
                                <th>{string.DESC}</th>
                                <th>{string.AMOUNT}</th>
                                <th>{string.DATE_REF}</th>
                                <th>{string.TYPE}</th>
                                <th>{string.AMOUNT_REAL}</th>
                                <th>{string.DATE_REAL}</th>
                                <th>{string.NOTICE}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="7">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table
