import React from 'react';
import fetchData from '../services/api';
import objToArr from '../services/objToArr';
import CoopTable from '../components/CoopTable';

class Cooperators extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    getData() {
        fetchData.then(response => {
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
            </div>
        )
    }
}

export default Cooperators;
