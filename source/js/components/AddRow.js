import React from 'react'

class AddRow extends React.Component {
    constructor(props) {
        super(props);

        this.isAddButtonClicked = true;
    }

    render() {
        return(
            this.isAddButtonClicked ?
                <div>
                    <table>
                        <tbody>
                            <tr className="table-row__add-container">
                                {this.props.displayRows.map((td, index) => {
                                    if(td === 'coopID') return
                                    return(
                                        <td key={index}>
                                            <input type="text" placeholder={td} />
                                        </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                    <button className="button button__submit">{this.props.title}</button>
                </div>
            :
                <button className="button button__add">Dodaj</button>
        )
    }
}

export default AddRow
