import React, { Component } from "react";
// import axios from "axios";
// import { loginService, tareasConsultar } from "../../utils/api/services";
import { withRouter } from "react-router-dom";
import { getToken } from "../../../utils/auth/Token";
import Tarea from "../../molecules/Tareas/Tarea";
import axios from "axios";

class Tareas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/tareas/Consultar`, {
            headers: {
                Authorization: getToken()
            }
        }).then(res => {
            const tareas = res.data.data;
            this.setState({ tareas });
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
    handleBorrar(data) {
        axios.put(`http://localhost:4000/tareas/Borrar`, { id: data }, {
            headers: {
                authorization: getToken()
            }

        }).then(res => {
            this.componentDidMount();
            alert(res.data.message)

        }).catch((error) => {
            console.log(error.response);
        })
    }
    handleEditar() {

    }
    render() {
        console.log(this.state.tareas);
        return (
            <div>
                <div>
                    <input></input>
                    <input id="fechaFin" type="datetime-local"></input>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Fecha inicio</th>
                            <th>Fecha Fin</th>
                        </tr>
                        {this.state.tareas.map(tarea => {
                            return (
                                <Tarea
                                    key={`tarea-${tarea.id}`}
                                    titulo={tarea.titulo}
                                    descripcion={tarea.descripcion}
                                    fecha_inicio={tarea.fecha_inicio}
                                    fecha_fin={tarea.fecha_fin}
                                    tarea={tarea}
                                    onClick={() => this.handleBorrar(tarea.id)}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Tareas);
