import React, { Component } from 'react';
import './App.css';
import General from './components/general';
import Members from './components/members';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: ''
    }
  }

  Save(data) {
    // make request to server to save form

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 logoWrap">
            <h1> Groupos de Amistad - Iglesia Fuego Pentecostes</h1>
          </div>
        </div>
        <div style={{ clear: 'left', backgroundColor: '#F1F4F7', overflow: 'hidden' }}>
          <div className="" style={{ color: "#676570" }}>
            {/* <header className="App-header"> */}
            <form name="event_report" encType="multipart/form-data" method="post" >
              <ul className="col-lg-12 col-md-12">
                <fieldset>
                  <li style={{ listStyle: 'none' }}>
                    <General Save={this.Save.bind(this)} />
                  </li>
                  <li style={{ listStyle: 'none' }}>
                    <Members Save={this.Save.bind(this)} />
                  </li>
                </fieldset>
              </ul>
            </form>
            {/* </header> */}
          </div>
          <div className="col-lg-12 col-md-12 col-xs-12 btnsection">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
