import React from 'react';
import './App.css';

class App2 extends React.Component {
    state = {
        isLoading: true,
        cars: [],
        error: null
    }
    componentDidMount() {
        this.fetchCarList()

    }


    fetchCarList = () => {

        fetch(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes`)

            .then(response => response.json())
            .then(data =>

                this.setState({
                    cars: data.Makes,
                    isLoading: false,
                })
            )


            .catch(error => this.setState({ error, isLoading: false }));
    };

    render() {
        const { isLoading, cars, error } = this.state;
        return (

            <React.Fragment>
                <h1>Car List</h1>

                {error ? <p>{error.message}</p> : null}

                {!isLoading ? (
                    cars.map(car => {
                        const { make_id, make_display, make_is_common, make_country } = car;
                        return (
                            <div key={make_id}>
                                <p>Display: {make_display}</p>
                                <p>Common: {make_is_common}</p>
                                <p>Country: {make_country}</p>
                                <hr />
                            </div>
                        );
                    })

                ) : (
                        <h3>Loading...</h3>
                    )}
            </React.Fragment>


        );
    }








}
export default App2;
