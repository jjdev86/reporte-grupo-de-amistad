import React, { Component } from "react";
import { validEmailRegex, validateForm, strongRegex } from "./validation Func";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      }
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  handleEvent(e) {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value
      }
      // () => console.log(this.state)
    );
  }

  validateUser(e) {
    e.preventDefault();
    const { errors, email, password } = this.state;
    // validate email
    errors.email = validEmailRegex(email)
      ? ""
      : "Por favor, introdusca un correo electrónico válido";
    // validate password
    errors.password = strongRegex.test(password)
      ? ""
      : "La contraseña no es fuerte";

    // validate the errors
    let isError = validateForm(errors);

    if (!isError) {
      this.setState(
        {
          errors
        },
        () => console.log(this.state)
      );
    } else {
      console.log("valid information entered");
    }
  }
  render() {
    return (
      <div className="logIn col-sm-12">
        <div className="loginInMain">
          <h2 className="mainHeading">Vea su cuenta</h2>
          <form autoComplete="off" name="login" id="frmLogin">
            <div className="formElementsWrapper formEmail">
              <label className="id_label" htmlFor="useremail">
                Email
              </label>
              <input
                className="formElement login_field formElementText"
                name="email"
                type="email"
                id="useremail"
                value={this.state.email}
                onChange={this.handleEvent}
              />
              {this.state.errors.email.length > 0 && (
                <span className="onError">{this.state.errors.email}</span>
              )}
            </div>
            <div className="formElementsWrapper formPassword">
              <label className="id_label" htmlFor="userpassword">
                Contraseña
              </label>
              <input
                className="formElement login_field formElementText"
                name="password"
                type="password"
                id="password"
                minLength="5"
                value={this.state.password}
                onChange={this.handleEvent}
              />
              {this.state.errors.password.length > 0 && (
                <span className="onError">{this.state.errors.password}</span>
              )}
            </div>
            <div className="formSubmit formEmail ">
              <input
                type="button"
                value="Inicie sesión"
                name="btnLogin"
                className="buttonAll col-sm-12"
                onClick={this.validateUser}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
