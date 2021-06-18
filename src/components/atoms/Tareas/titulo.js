import React, { Component } from "react";
import "../../../css/Tareas/titulo.css";

class Titulo extends Component {

    render() {
        return (
            <div className="Titulo">
                {this.props.data}
            </div>
        );
    }

}

export default Titulo;