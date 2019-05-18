import React, { Component } from 'react';

import '../App.css';
import axios from 'axios'

class App2 extends Component {
  state = {
    data: ''
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = async () => {
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    const response = await axios.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes', config)
    let data = JSON.parse(response.data.slice(2, -2))
    this.setState({ data: data })
  }

  getCarList = (raw_data) => {
    let carList = {}
    raw_data.forEach(function (element) {
      if (!carList[element.make_country]) {
        carList[element.make_country] = []
        carList[element.make_country].push(element.make_display)
      } else {
        carList[element.make_country].push(element.make_display)
      }
    });
    let expectedData = Object.keys(carList).map(function (key, index) {
      return <li key={index}>{key} : {carList[key].map(key => key + " : ")}</li>
    });
    return expectedData;
  }

  getNumberCarOfEachCountry = (raw_data) => {
    let carList = {}
    raw_data.forEach(function (element) {
      carList[element.make_country] = (carList[element.make_country] || 0) + 1
    })
    let expectedData = Object.keys(carList).map(function (key, index) {
      return <li key={index}>{key} : {carList[key]}</li>
    });
    return expectedData;
  }

  render() {
    let usaList = 0
    let usaLength = 0
    let carList = []
    let numberCarOfEachCountry = []
    if (this.state.data.Makes) {
      let raw_data = this.state.data.Makes
      carList = this.getCarList(raw_data)
      numberCarOfEachCountry = this.getNumberCarOfEachCountry(raw_data)
      const getUSAData = raw_data.filter((item)=>{
          return item.make_country === 'USA'
      })
    usaList = getUSAData.map((item) => <li>{item.make_display}</li>)
    usaLength = getUSAData.length
    
    }
    return (
    <div>
      <div className="col-sm-12 col-form-label size-label section"> a. แต่ละประเทศผลิตรถกี่ยี่ห้อ</div>
      <div className="col-sm-12 col-form-label size-label "> {numberCarOfEachCountry} </div>

      <div className="col-sm-12 col-form-label size-label section"> b. แต่ละประเทศมีรถยี่ห้ออะไรบ้าง </div>
      <div className="col-sm-12 col-form-label size-label "> {carList}</div>


      <div className="col-sm-12 col-form-label size-label section"> c. USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง </div>
      <div className="col-sm-12 col-form-label size-label "> มี {usaLength} ยี่ห้อ {usaList} </div>


    </div>);
  }
}

export default App2;
