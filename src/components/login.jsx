import React, { Component } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  render() {
    return (
      <div className="logIn row">
        <div className="loginInMain col-sm-12">
          <h2 className="mainHeading">Vea su cuenta</h2>
          <form autoComplete="off" name="login" id="frmLogin" className="row">
            <div className="formElementsWrapper formEmail col-sm-12">
              <label className="id_label" htmlFor="useremail">Email</label>
              <input className="formElement login_field formElementText" name="emailAdd" type="email" id="useremail" />
            </div>
            <div className="formElementsWrapper formPassword col-sm-12">
              <label className="id_label" htmlFor="userpassword">Contraseña</label>
              <input className="formElement login_field formElementText" name="userPassword" type="password" id="password" />
            </div>
            <div className="formSubmit col-sm-12">
              <input type="submit" value="Inicie Sesion" name="btnLogin" className="buttonAll col-sm-12" />
            </div>
          </form>
        </div>
      </div>
    )
  };

}

export default Login;