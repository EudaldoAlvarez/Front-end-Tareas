import React, { Component } from 'react';
import "../../../css/Tareas/borrar.css";

class Borrar extends Component {
    
    render() {
        return (
            <button
                className="bg-red-400 border-red-500 border-2 rounded-lg hover:bg-red-500 cursor-pointer p-1"
                onClick={this.props.borrar}>
                Borrar
            </button>
        );
    }
}

export default Borrar;