import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


class App1 extends Component {

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
                        <div className="content ">
                            <div className="box">
                                <div className="size-heading">
                                    Apisada Chaitamol
              </div>
                                <div className="box1"><i class="fas fa-cloud-download-alt fa-3x"></i></div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="box">
                                <div className="size-heading2">
                                    Student
              </div>
                                <div className="box2"><i class="fab fa-behance-square fa-3x"></i></div>
                            </div>

                        </div>
                        <div className="content">
                            <div className="box">
                                <div className="box3"><i class="fab fa-font-awesome-flag fa-2x"></i><p className="size-heading3">HOME</p> </div>
                                <div className="box4"><i class="fas fa-user-graduate fa-2x"></i><p className="size-heading3">RESUME</p> </div>
                                <div className="box5"><i class="fas fa-briefcase fa-2x "></i><p className="size-heading3">PORTFOLIO</p></div>
                                <div className="box6"><i class="fas fa-map-marker-alt fa-2x"></i><p className="size-heading3">CONTATCS</p></div>
                                <div className="box7"><i class="far fa-comments fa-2x"></i><p className="size-heading3">FEEDBACK</p></div>
                                <div className="box8"><i class="fas fa-pen-nib fa-2x"></i><p className="size-heading3">BLOG</p></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="item-left-2">

                        <div className="form-group row text-align">
                            <label for="staticName" className="col-sm-12 col-form-label size-personal">HTML TEMPLATE</label>
                            <label for="staticName" className="col-sm-12 col-form-label size-cv">PERFECT FOR CV / RESUME OR PORTFOLIO WEBSITE</label><br /><br /><br />

                            <div class="row">
                                <div class="column">
                                    <div class="row ">
                                        <div className="app-left">
                                            <i class="far fa-clock blueiconcolor  fa-2x"></i>
                                        </div>
                                        <div className="app-right">
                                            <h4>MODERN</h4>
                                            <div className="Text">
                                                <p>Many modern jobs require modern resumes.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="column">
                                    <div class="row ">
                                        <div className="app-left">
                                            <i class="fas fa-peace blueiconcolor  fa-2x"></i>
                                        </div>
                                        <div className="app-right">
                                            <h4>SIMPLE CV</h4>
                                            <div className="Text">
                                                <p>Basic designs that use few if any graphical elements to get your information across.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="row ">
                                        <div className="app-left">
                                            <i class="fas fa-cogs blueiconcolor fa-2x"></i>
                                        </div>
                                        <div className="app-right">
                                            <h4>RESPONSIVE</h4>
                                            <div className="Text">
                                                <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="item-right-2">

                        <div className="form-group row text-align">

                            <label for="staticName" className="col-sm-12 col-form-label size-personal">PERSONAL INFO</label>
                            <label for="staticName" className="col-sm-3 col-form-label size-label">Name:</label>
                            <div className="col-sm-9">
                                <input type="text" readonly className="form-control-plaintext " id="staticName" value="Apisada Chaitamol" />
                            </div>
                            <label for="staticBirthday" className="col-sm-3 col-form-label size-label">Birthday:</label>
                            <div className="col-sm-9">
                                <input type="text" readonly className="form-control-plaintext" id="staticBirthday" value="23/01/1998" />
                            </div>
                            <label for="staticAddress" className="col-sm-3 col-form-label size-label">Address:</label>
                            <div className="col-sm-9">
                                <input type="text" readonly className="form-control-plaintext" id="staticAddress" value="90/67 Soi Saimai51, Saimai Bangkok 10220" />
                            </div>
                            <label for="staticPhone" className="col-sm-3 col-form-label size-label">Phone:</label>
                            <div className="col-sm-9">
                                <input type="text" readonly className="form-control-plaintext" id="staticPhone" value="082-3386638" />
                            </div>
                            <label for="staticEmail" className="col-sm-3 col-form-label size-label">Email:</label>
                            <div className="col-sm-9">
                                <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="apisada.cha@gmail.com" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );




    }
}
export default App1;