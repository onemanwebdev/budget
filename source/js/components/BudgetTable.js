import React from 'react';
import ContentTable from './ContentTable';
import * as string from '../constants/strings';

class BudgetTable extends React.Component {
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
                                <th>{string.KIND}</th>
                                <th>{string.AMOUNT_REAL}</th>
                                <th>{string.DATE_REAL}</th>
                                <th>{string.NOTICE}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ContentTable />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default BudgetTable;
