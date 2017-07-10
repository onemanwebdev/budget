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
                                <th>{string.DOC_DATE}</th>
                                <th>{string.CONTRIBUTOR}</th>
                                <th>{string.DOC_NR}</th>
                                <th>{string.ITEM_DESCRIPTION}</th>
                                <th>{string.AMOUNT_NET}</th>
                                <th>{string.VAT_PERCENT}</th>
                                <th>{string.AMOUNT_VAT}</th>
                                <th>{string.AMOUNT_GROSS}</th>
                                <th>{string.DUE_DATE}</th>
                                <th>{string.DATE_OF_PAYMANT}</th>
                                <th>{string.TYPE}</th>
                                <th>{string.COMMENTS}</th>
                                <th>{string.DOCUMENT_FORM}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="13">
                                    {`You select: ${this.props.month} ${this.props.year}`}
                                </td>
                                <td>
                                    {console.log(api)}
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
