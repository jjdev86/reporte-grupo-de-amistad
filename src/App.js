import React, { Component } from "react";
import "./App.css";
import General from "./components/general";
import Members from "./components/members";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';

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
      <Router>
      <div className="mainHtml">
        <header role="banner">
          <div className="html5header">
            <div className="logoStripParent">
              <div className="logoStripChild">
                <div id="logo">
                  <h3 className="logoTitle">Iglesia Fuego Pentecostes</h3>
                </div>
                <div className="subLogo">
                  <h5 className="subLogoTitle">Reporte de grupos de amistad</h5>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mainContainer container">
          <Switch>
            {/* <Login></Login> */}
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
