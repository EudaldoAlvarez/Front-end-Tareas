import React, { Component } from 'react';
import "../../../css/Tareas/editar.css";
import axios from "axios";
import { getToken } from '../../../utils/auth/Token';


class Editar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: "hidden",
            id: this.props.id,
        }
    }

    handleOnInputChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };
    handleActivar() {
        const estado = { estado: "block" };
        this.setState(estado)
    }
    handleDesactivar() {
        const estado = { estado: "hidden" };
        this.setState(estado)


    }
    handleEditar(data) {
        console.log(this.state)
        axios.put(`http://localhost:4000/tareas/Editar`, {
            id: data.id,
            titulo: data.titulo,
            descripcion: data.descripcion,
            fecha_inicio: data.fecha_inicio,
            fecha_fin: data.fecha_fin,
        }, {
            headers: {
                authorization: getToken()
            }
        }).then(res => {
            alert(res.data.message)

        }).catch((error) => {
            alert(error.response.data.message);
        })
    }
    render() {
        return (
            <div>
                <button
                    className="bg-yellow-200 border-yellow-400 border-2 rounded-lg hover:bg-yellow-400 cursor-pointer p-1"
                    onClick={() => this.handleActivar()}>
                    Editar
                </button>

                <div className={`w-96 fixed ${this.state.estado} bg-yellow-400 bottom-0 right-9 rounded-lg border-yellow-700 p-4`}>
                    <label className="w-full">Titulo</label>
                    <input
                        className="w-full"
                        type="text"
                        onChange={(event) => this.handleOnInputChange("titulo", event)}
                    />
                    <label className="w-full">Descripción</label>
                    <input
                        className="w-full"
                        type="text"
                        onChange={(event) => this.handleOnInputChange("descripcion", event)}
                    />
                    <label className="w-full ">Fecha inicio</label>
                    <input
                        className="w-full"
                        type="datetime-local"
                        onChange={(event) => this.handleOnInputChange("fecha_inicio", event)}
                    />
                    <label className="w-full">Fecha fin</label>
                    <input
                        className="w-full"
                        type="datetime-local"
                        onChange={(event) => this.handleOnInputChange("fecha_fin", event)}
                    />
                    <button className="w-1/3 bg-blue-500 border-4 border-blue-700" onClick={() => { this.handleEditar(this.state); this.handleDesactivar(); }} >Aceptar</button>
                </div>
            </div>
        );
    }
}

export default Editar;