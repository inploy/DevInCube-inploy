import React from 'react'


export class CarList extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {

        fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
            .then(results => {
                return results.json();
            }).then(data => {
                let carList = data.results.map((item) => {
                    return (
                        console.log(item)
                    )
                })
                this.setState({ carList: carList });
                console.log("state", this.state.carList);
            })
    
        }



    render() {

        return (
            <div className="container">
                {this.state.carList}
            </div>
        );
    }

}
