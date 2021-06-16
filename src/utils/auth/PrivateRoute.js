import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loading from "../../components/pages/Loading/Loading";
import { isAuthService } from "../api/services";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.checkSesion();
  }

  checkSesion = async () => {
    const { userShouldBeAuth = true, redirect = "/" } = this.props;
    const isAuthResponse = await isAuthService();
    if (userShouldBeAuth ? isAuthResponse.success : !isAuthResponse.success) {
      // Abrir la liga
      this.setState({
        loading: false,
      });
    } else {
      this.props.history.push(redirect);
    }
  };

  render() {
    const { component } = this.props;
    const { loading } = this.state;
    return loading ? <Loading /> : component;
  }
}

export default withRouter(PrivateRoute);
