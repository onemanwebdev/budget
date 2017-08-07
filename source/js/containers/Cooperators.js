import React from 'react';
import api from '../services/api';
import objToArr from '../services/objToArr';
import CoopTable from '../components/CoopTable';
import AddRow from '../components/AddRow';

class Cooperators extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    getData() {
        api.get('cooperators', null).then(response => {
            this.setState({data: response.data});
        });
    }

    convertData(data) {
        let covertedData = objToArr(data);
        return covertedData;
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return(
            <div>
                <CoopTable
                    data={this.convertData(this.state.data)}
                    displayRows={["coopID", "name", "shortName", "zip", "city", "address"]}
                />
                <AddRow
                    title={`nowy dostawca`}
                    buttonLabel={`dodaj dostawcę`}
                    displayRows={["coopID", "name", "shortName", "zip", "city", "address"]}
                />
            </div>
        )
    }
}

export default Cooperators;
