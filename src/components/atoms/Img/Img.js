import React, { Component } from "react";

class Img extends Component {
  render() {
    if (this.props.className) {
      this.props.className = "img-atom " + this.props.className;
    }
    return <img className="img-atom" alt="img component" {...this.props} />;
  }
}

export default Img;
