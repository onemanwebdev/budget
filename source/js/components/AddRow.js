import React from 'react'

class AddRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddButtonClicked: false,
            name: null
        }

        this.handleClick = this.handleClick.bind(this)
    }

    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState =>({
            isAddButtonClicked: !prevState.isAddButtonClicked
        }));
    }

    render() {
        return(
            this.state.isAddButtonClicked ?
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="99">{this.props.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row__add-container">
                                {this.props.displayRows.map((td, index) => {
                                    if(td === 'coopID') return
                                    return(
                                        <td key={index}>
                                            <input type="text" name={td} placeholder={td} onChange={this.updateState}/>
                                        </td>
                                    )
                                })}
                                <td><button className="button button__submit" onClick={this.handleClick}>{this.props.buttonLabel}</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            :
                <button className="button button__add" onClick={this.handleClick}>Dodaj</button>
        )
    }
}

export default AddRow
