import React, { Component } from "react";
import "../../../css/Tareas/descripcion.css";

class Titulo extends Component {

    render() {
        return (
            <div className="p-2">
                {this.props.data}
            </div>
        );
    }

}

export default Titulo;