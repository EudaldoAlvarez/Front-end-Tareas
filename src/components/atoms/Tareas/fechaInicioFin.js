import React, { Component } from "react";
import "../../../css/Tareas/descripcion.css";

class Fecha extends Component {

    render() {
        return (
            <div className="Fecha">
                {this.props.data}
            </div>
        );
    }

}

export default Fecha;