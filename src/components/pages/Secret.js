import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { deleteToken } from "../../utils/auth/Token";

class Secret extends Component {
  componentDidMount() {
    console.log("SECRET DID MOUNT");
  }

  handleTest = () => {
    deleteToken();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        Secret shhhhhhh
        <button onClick={this.handleTest}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Secret);
