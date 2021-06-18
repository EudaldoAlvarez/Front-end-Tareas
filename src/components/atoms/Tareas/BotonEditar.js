import React, { Component } from 'react';
import "../../../css/Tareas/editar.css";

class Editar extends Component {
    render(){
        return(
            <button 
                className="BotonEditar"
                onClick={this.props.onClick}>
                Editar
            </button>
        );
    }
}

export default Editar;