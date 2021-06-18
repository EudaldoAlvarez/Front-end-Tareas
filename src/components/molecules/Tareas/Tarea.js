import React, { Component } from 'react';

import "../../../css/Tareas/borrar.css";
import Titulo from "../../atoms/Tareas/titulo";
import Descripcion from "../../atoms/Tareas/descripcion";
import Fecha from "../../atoms/Tareas/fechaInicioFin";
import Borrar from '../../atoms/Tareas/BotonBorrar';
import Editar from '../../atoms/Tareas/BotonEditar';


class Tarea extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         titulo: "",
    //         descripcion: "",
    //         fecha_incio: "",
    //         fecha_fin: ""
    //     }
    // }



    render() {
        return (
            <tr className="bg-blue-200 font-serif">
                <td className="bg-blue-700 text-white text-md rounded-l-lg border-b-2 text-xl border-blue-900">
                    <Titulo data={this.props.titulo} />
                </td>
                <td className="bg-blue-500 text-white text-md border-b-2 border-blue-900">
                    <Descripcion data={this.props.descripcion} />
                </td>
                <td className="bg-blue-400 text-white text-md border-b-2 border-blue-900">
                    <Fecha data={this.props.fecha_inicio} />
                </td>
                <td className="bg-blue-400 text-white text-md border-b-2 border-blue-900">
                    <Fecha data={this.props.fecha_fin} />
                </td>
                <td className=" text-center space-y-2 border-b-2 border-blue-900 rounded-r-lg">
                    <Editar id={this.props.id}></Editar>
                    <Borrar borrar={this.props.borrar}></Borrar>
                </td>
            </tr>
        );
    }
}

export default Tarea;