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
            showError: false,
            error: {
                coopName: "",
                coopShortName: "",
                coopZIP: "",
                coopCity: "",
                coopAddress: ""
            }
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
                error: {
                    ...this.state.error,
                    [name]: ""
                }
            }, this.checkFormValidation)
        :
            this.setState({
                elementValidation: {
                    ...this.state.elementValidation,
                    [name]: false
                },
                error: {
                    ...this.state.error,
                    [name]: `${keyNames[name].regex.errorPL}`
                }
            }, this.checkFormValidation)
    }

    checkFormValidation = () => {
        let isValid = true
        Object.values(this.state.elementValidation).map(value => {
            if(!value) isValid = false
        })
        this.setState({isFormValid: isValid})
    }

    setData = () => {
        api.post('cooperators', {
            coopName: this.refs.coopName.value,
            coopShortName: this.refs.coopShortName.value,
            coopZIP: this.parseInput(this.refs.coopZIP.value, 'zipCode'),
            coopCity: this.refs.coopCity.value,
            coopAddress: this.refs.coopAddress.value
        }
        ).then(response => console.log(response))
        .catch(err => console.log(err))
    }

    showError = () => {
        let isError = false;
        Object.values(this.state.error).map(error => {
            console.log(Object.values(this.state.error))
            if(error) {
                isError = true
                this.setState({showError: true})
            }
        })
        if(!isError) this.setState({showError: false})
    }

    parseInput(data, options = null) {
        if(options === 'zipCode' && data.length > 5) {
            data = `${data.slice(0,2)}${data.slice(3,6)}`
        }
        data = `${data.slice(0,2)}-${data.slice(2,5)}`
        return data
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
            <div className="row">
                <div className="col-xs-24">
                    {this.state.isAddButtonClicked ?
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="99">{this.props.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row__add-container clean">
                                    {this.props.displayRows.map((td, index) => {
                                        if(td === 'coopID') return
                                        return(
                                            <td key={index}>
                                                <input
                                                    ref={td}
                                                    type="text"
                                                    name={td}
                                                    placeholder={keyNames[td].placeholder}
                                                    onInput={this.checkElementValidation}
                                                    onBlur={this.showError}
                                                />
                                            </td>
                                        )
                                    })}
                                    <td>
                                        {this.state.isFormValid ?
                                            <button className="button button__submit" type="submit" name="send" onClick={this.handleClick}>
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
                    :
                        <div>
                            <button className="button button__add" onClick={this.handleClick}>Dodaj</button>
                        </div>
                    }
                    {(Object.values(this.state.error).length > 0 && this.state.showError) ?
                        <div>
                            {Object.values(this.state.error).map(error => {
                                if(error !== "") {
                                    return(
                                        <div key={Math.random()} className="errorRegex">
                                            <p className="errorRegex__text">{error}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default AddRow
