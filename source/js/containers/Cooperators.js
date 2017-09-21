import React from 'react';
import api from '../services/api';
import objToArr from '../services/objToArr';
import CoopTable from '../components/CoopTable';
import AddRow from '../containers/AddRow';

class Cooperators extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    getData() {
        api.get('cooperators', null).then(response => {
            this.setState({data: response.data})
        });
    }

    convertData(data) {
        let covertedData = objToArr(data);
        return covertedData;
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return(
            <div>
                <CoopTable
                    data={this.convertData(this.state.data)}
                    displayRows={["coopID", "coopName", "coopShortName", "coopZIP", "coopCity", "coopAddress"]}
                />
                <AddRow
                    title={`nowy dostawca`}
                    buttonLabel={`dodaj dostawcę`}
                    displayRows={["coopID", "coopName", "coopShortName", "coopZIP", "coopCity", "coopAddress"]}
                />
            </div>
        )
    }
}

export default Cooperators
