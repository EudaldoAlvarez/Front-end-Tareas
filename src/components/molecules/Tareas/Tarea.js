import React, { Component } from 'react';

import "../../../css/Tareas/borrar.css";
import Titulo from "../../atoms/Tareas/titulo";
import Descripcion from "../../atoms/Tareas/descripcion";
import Fecha from "../../atoms/Tareas/fechaInicioFin";
import Borrar from '../../atoms/Tareas/BotonBorrar';
import Editar from '../../atoms/Tareas/BotonEditar';


class Tarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            descripcion: "",
            fecha_incio: "",
            fecha_fin: ""
        }
    }



    render() {
        return (
            <tr>
                <td>
                    <Titulo data={this.props.titulo} />
                </td>
                <td>
                    <Descripcion data={this.props.descripcion} />
                </td>
                <td>
                    <Fecha data={this.props.fecha_inicio} />
                </td>
                <td>
                    <Fecha data={this.props.fecha_fin} />
                </td>
                <td>
                    <Editar data={this.props.tarea}></Editar>
                </td>
                <td>
                    <Borrar onClick={this.props.onClick}></Borrar>
                </td>
            </tr>
        );
    }
}

export default Tarea;