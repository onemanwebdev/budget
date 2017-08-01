import React from 'react';
import fetchData from '../services/api';
import CoopTable from '../components/CoopTable';

class Cooperators extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "old Data"
        }
    }

    getData() {
        fetchData.then(response => {
            return response.data;
        });
    }

    ComponentDidMount() {
        this.setState({data: 'new data'})
    }

    render() {
        return(
            <div>
                <CoopTable data={this.state.data}/>
            </div>
        )
    }
}

export default Cooperators;
