import React, { Component } from "react";
import "./App.css";
// import General from './components/general';
import General1 from "./components/gernal1";
import Members from "./components/members";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: ""
    };
  }

  Save(data) {
    // make request to server to save form
  }
  // test
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 logoWrap">
            <h1> Groupos de Amistad - Iglesia Fuego Pentecostes</h1>
          </div>
        </div>
        <div
          style={{
            clear: "left",
            backgroundColor: "#F1F4F7",
            overflow: "hidden"
          }}
        >
          <div className="" style={{ color: "#676570" }}>
            <General1 Save={this.Save.bind(this)} />
            <Members Save={this.Save.bind(this)} />
          </div>
          <div className="col-lg-12 col-md-12 col-xs-12 btnsection">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
