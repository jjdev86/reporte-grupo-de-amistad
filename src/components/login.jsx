import React, { Component } from "react";
import {
  validEmailRegex,
  validateForm,
  passwordValid
} from "./validation Func";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAuth: null,
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
    if (email.length) {
      errors.email = validEmailRegex(email)
        ? ""
        : "Introdusca un correo electrónico válido.";
    } else {
      errors.email = "Introdusca un correo electrónico.";
    }
    // validate password
    errors.password = passwordValid(password)
      ? ""
      : "Introdusca su contraseña.";
    // console.log(password, `after check`);
    // validate the errors
    let isError = validateForm(errors);

    if (!isError) {
      this.setState(
        {
          errors
        }
        // () => console.log(this.state)
      );
    } else {
      this.setState(
        {
          errors
        },
        () => {
          // make ajax request to validate email & password accounts.
          const random = [true, false];
          let isUserVerified =
            random[Math.floor(Math.random() * random.length)];

          console.log(isUserVerified, `was user verified`);
          this.setState(
            { isAuth: isUserVerified, auth: "La contraseña no es valida" },
            () => {
              if (this.state.isAuth) {
                this.props.history.push({
                  pathname: "/home",
                  state: { isAuth: this.state.isAuth, email: this.state.email }
                });
              }
            }
          );
        }
      );

      // console.log("valid information entered");
    }
  }
  render() {
    return (
      <div className="main">
        <h1>Bienvenidos</h1>
        <div className="container">
          <div className="">
            <div className="loginInMain">
              <h2 className="mainHeading">Vea su cuenta</h2>
              {this.state.isAuth === false && (
                <span className="onError">
                  La combinacion de correo electronico y contraseña no es valida
                </span>
              )}
              <form autoComplete="off" name="login" id="frmLogin">
                <div className="formElementsWrapper formEmail">
                  <label className="id_label" htmlFor="useremail">
                    Correo electronico
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
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
                    <span className="onError">
                      {this.state.errors.password}
                    </span>
                  )}
                </div>
                {/* <div className="formSubmit formEmail ">
              <input
                type="button"
                value="Inicie sesión"
                name="btnLogin"
                className="buttonAll col-sm-12"
                onClick={this.validateUser}
              />
            </div> */}
              </form>
              <div className="formSubmit formEmail ">
                <input
                  type="button"
                  value="Inicie sesión"
                  name="btnLogin"
                  className="buttonAll col-sm-12"
                  onClick={this.validateUser}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
