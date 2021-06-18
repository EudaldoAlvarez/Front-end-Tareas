import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import { getToken } from "../../../utils/auth/Token";
import Tarea from "../../molecules/Tareas/Tarea";
import axios from "axios";
import * as moment from "moment";

class Tareas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: [{
                id: "",
                titulo: "Esto es un titulo",
                descripcion: "Esto es una descripcion",
                fecha_inicio: "",
                fecha_fin: "",
            }]
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/tareas/Consultar`, {
            headers: {
                Authorization: getToken()
            }
        }).then(res => {
            const tareas = res.data.data;
            if (tareas?.length) { this.setState({ tareas }); }

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
    
    handleActivar(){
        
    }
    render() {
        console.log(this.state.tareas);
        return (
            <div className=" w-2/3 ml-2 h-screen overflow-y-auto">
                <table className="rounded-xl">
                    <tbody>
                        <tr className="bg-black rounded-l-md text-white text-lg">
                            <th className="rounded-l-md">Titulo</th>
                            <th>Descripcion</th>
                            <th>Fecha inicio</th>
                            <th>Fecha Fin</th>
                            <th className="rounded-r-md">Acciones</th>
                        </tr>
                        {this.state.tareas.map(tarea => {
                            let fecha_inicio_Format = moment(tarea.fecha_inicio).format('DD-MM-YYYY hh:mm');
                            let fecha_fin_Format = moment(tarea.fecha_fin).format('DD-MM-YYYY hh:mm');
                            return (
                                <Tarea
                                    key={`tarea-${tarea.id}`}
                                    titulo={tarea.titulo}
                                    descripcion={tarea.descripcion}
                                    fecha_inicio={fecha_inicio_Format}
                                    fecha_fin={fecha_fin_Format}
                                    borrar={() => this.handleBorrar(tarea.id)}
                                    id={tarea.id}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tareas;
