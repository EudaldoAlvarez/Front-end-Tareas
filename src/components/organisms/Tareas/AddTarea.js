import React, { Component } from "react";
import axios from "axios";
import { getToken } from "../../../utils/auth/Token";



class AddTarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: undefined,
            descripcion: undefined,
            fecha_inicio: undefined,
            fecha_fin: undefined,
        };
    }

    handleOnInputChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };
    componentDidMount(){
        console.log("mount");
    }
    handleAgregar(data) {
        axios.post(`http://localhost:4000/tareas/Crear`, data, {
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
            <div className="block w-full border-2 border-green-500 text-xl bg-green-300 text-center h-1/2 rounded-lg p-2">
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
                rows="20"
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
                <button className="w-1/3 bg-blue-500 border-4 border-blue-700" onClick={() => this.handleAgregar(this.state)}>Agregar</button>
            </div>
        );
    }
}

export default AddTarea;