import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App2 from './App2'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section1">
          <div className="item-left">
            <img className="img"
              alt="profile"
              src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/14212780_1160979357296084_6783723684663381606_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk22-2.fna&oh=d7fc2d531d629f44e5803b5ad6287d21&oe=5D31C08D"
            /></div>
          <div className="item-right">
            <div className="content">1</div>
            <div className="content">1</div>
            <div className="content">1</div>
          </div>
        </div>
        <div className="section2">
          <div className="item-left-2">content3</div>
          <div className="item-right-2">
            <div className="text-align">
            <h1>PERSONAL INFO</h1>
            <p>NAME : Apisada Chaitamol </p>
            <p>BIRTH DATE : 23/01/41</p>
            <p>ADDRESS : 90/67 , Saimai Road ,Saimai,Bangkok  10220</p>
            <p>PHONE   :  082-3386638 </p>
            <p>EMAIL   : apisada.cha@gmail.com</p>
          </div>
          </div>
        </div>
      </div>
    );


    //  <Router>
      
    //         <Switch>
    //         <Route path="/" exact component={App} />
    //         <Route path="/app2" exact component={App2} />
    //         <Route patch="**" component={() => <h1>Not Found</h1>} />
    //         </Switch>
    //   </Router> 

  }
}
export default App;