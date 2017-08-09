import React from 'react'
import api from '../services/api'

class AddRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddButtonClicked: false,
            isDataSend: false,
            cooperators: {}
        }
    }

    updateState = e => {
        this.setState({cooperators: {...this.state.cooperators, [e.target.name]: e.target.value}})
    }

    setData = () => {
        api.post({
            url: 'cooperators',
            data: this.state.cooperators
        }).then(response => {
            response.status === 200
        ?
            this.setState(prevState =>({
                isAddButtonClicked: !prevState.isAddButtonClicked,
                isDataSend: !prevState.isDataSend
            }))
        :
            null
        }).then(
            setTimeout(() => {
                this.setState(prevState => ({
                    isDataSend: !prevState.isDataSend
                }))
            },1500
            )
        )
    }

    handleClick = e => {
        e.preventDefault();
        if(e.target.name === "send") this.setData();
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
                                <td><button className="button button__submit" name="send" onClick={this.setData}>{this.props.buttonLabel}</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            :
                this.state.isDataSend ?
                    <div><p>Dane zostały wysłane</p></div>
                :
                    <button className="button button__add" onClick={this.handleClick}>Dodaj</button>
        )
    }
}

export default AddRow
