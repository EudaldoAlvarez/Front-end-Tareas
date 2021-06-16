import React, { Component } from "react";
import LoadingContainer from "../../molecules/LoadingContainer/LoadingContainer";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    const { children } = this.props;
    const { loading } = this.state;
    return (
      <LoadingContainer loading={loading}>
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          {children}
        </div>
      </LoadingContainer>
    );
  }
}

export default Loading;
