import React from 'react'
import api from '../services/api'
import keyNames from '../constants/keyNames'
import REGEX from '../constants/regex'

class AddRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isAddButtonClicked: false,
            isFormValid: false,
            elementValidation: {
                coopName: false,
                coopShortName: false,
                coopZIP: false,
                coopCity: false,
                coopAddress: false
            },
            showError: false
        }
    }

    checkElementValidation = e => {
        const name = e.target.name
        const value = e.target.value
        keyNames[name].regex.regex.test(value) ?
            this.setState({
                elementValidation: {
                    ...this.state.elementValidation,
                    [name]: true
                },
                showError: false
            })
        :
            this.setState({showError: `! ${e.target.placeholder}: ${keyNames[name].regex.errorPL}`})
    }

    checkFormValidation = () => {
        console.log('x')
        let isFormValid = true
        Object.entries(this.state.elementValidation).map(el => {
            let value = el[1]
            if(!value) isFormValid = false
        })
        this.setState({isFormValid: isFormValid})
    }

    setData() {
        api.post('cooperators', {
            coopName: this.refs.coopName.value,
            coopShortName: this.refs.coopShortName.value,
            coopZIP: this.refs.coopZIP.value,
            coopCity: this.refs.coopCity.value,
            coopAddress: this.refs.coopAddress.value
        }
        ).then(response => console.log(response))
        .catch(err => console.log(err))
    }

    handleClick = e => {
        e.preventDefault();
        if(e.target.name === "send") this.setData(e.target);
        this.setState(prevState =>({
            isAddButtonClicked: !prevState.isAddButtonClicked
        }))
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
                                            <input ref={td} type="text" name={td} placeholder={keyNames[td].placeholder} onBlur={this.checkElementValidation} onChange={this.checkFormValidation}/>
                                        </td>
                                    )
                                })}
                                <td>
                                    {this.state.isFormValid ?
                                        <button className="button button__submit" name="send" onClick={this.handleClick}>
                                            {this.props.buttonLabel}
                                        </button>
                                    :
                                        <button className="button button__submit--disabled">
                                            {this.props.buttonLabel}
                                        </button>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {this.state.showError ?
                        <div className="errorRegex">
                            <p className="errorRegex__text">{this.state.showError}</p>
                        </div>
                    :
                        null
                    }
                </div>
            :
                <button className="button button__add" onClick={this.handleClick}>Dodaj</button>
        )
    }
}

export default AddRow
