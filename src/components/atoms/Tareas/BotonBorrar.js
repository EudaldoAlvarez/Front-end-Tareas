import React, { Component } from 'react';
import "../../../css/Tareas/borrar.css";

class Borrar extends Component {
    
    render() {
        return (
            <button
                className="BotonBorrar"
                onClick={this.props.onClick}>
                Borrar
            </button>
        );
    }
}

export default Borrar;