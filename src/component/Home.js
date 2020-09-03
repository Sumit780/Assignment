import React from 'react';
import Axios from 'axios';
import Summary from './Summary';
import Header from './Header';
import Tables from './tables';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            result: [],
            isloading: true,
        }
    }

    componentDidMount() {
        Axios.post('http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36',
            {
                clientId: 10,
                dataRecord: {
                    userRoleId: 4,
                    userRoleName: "COMPANY",
                    userId: 10
                },
                fromDate: 1577888571659,
                toDate: 1593613371659,
                tripId: 36
            })
            .then((res) => {
                this.setState({
                    result: res.data,
                    isloading: false,
                })
            }, (error) => {
                console.log(error);
            });

    }

    loading = () =>{
        return <h2 className="d-flex justify-content-center m-5">Loading....</h2>
    }

    render() {
        const { result, isloading } = this.state;
        return (
            <>
                <div>
                    <Header />
                    {!isloading && <Summary result={result} />}
                    {!isloading && <Tables tripDetails={result.data.tripDetails} />}
                    {isloading && this.loading()}
                </div>
            </>
        )
    }
}

export default Home;