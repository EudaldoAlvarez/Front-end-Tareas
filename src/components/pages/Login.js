import React, { Component } from "react";
import axios from "axios";
import { loginService } from "../../utils/api/services";
import { withRouter } from "react-router-dom";
import { setToken } from "../../utils/auth/Token";

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
      this.props.history.push("/secret");
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
      <>
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
        <button onClick={this.handleLogin}>Iniciar sesión</button>
        <button onClick={this.handleTest}>TEST</button>
      </>
    );
  }
}

export default withRouter(Login);
