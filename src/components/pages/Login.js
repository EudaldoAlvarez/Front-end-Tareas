import React, { Component } from "react";
import { loginService } from "../../utils/api/services";
import { withRouter } from "react-router-dom";
import { setToken } from "../../utils/auth/Token";
import "../../css/Login/login.css"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnInputChange = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    let loginResponse = await loginService(email, password);
    if (loginResponse?.success) {
      setToken(loginResponse.data.data.token);
      this.props.history.push("/Consular");
    }
  };

  componentDidMount() {
    console.log("Login did mount");
  }

  handleTest = () => {
    this.props.history.push("/secret");
  };

  render() {
    return (
      <div className="Container">
        <div className="Formulario">

          <h2 className="Titulo">Iniciar Sesion</h2>
          <input
            placeholder="email"
            type="email"
            onChange={(event) => this.handleOnInputChange("email", event)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(event) => this.handleOnInputChange("password", event)}
          />
          <span className="Registro">Resgistrar aquí</span>
          <button onClick={this.handleLogin}>Iniciar sesión</button>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
