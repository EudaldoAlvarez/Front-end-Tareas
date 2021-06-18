import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { deleteToken } from "../../utils/auth/Token";
import AddTarea from "../organisms/Tareas/AddTarea";
import TablaTareas from "../organisms/Tareas/TablaTareas";
// import axios from "axios";

class Tareas extends Component {
    
    handleLoguot(){
        deleteToken();
        this.props.history.push("/")
    }
   
    render() {

        return (
            <div className="w-screen h-screen inline-flex bg-gradient-to-r from-blue-500 via-blue-900 to-black">
                <TablaTareas></TablaTareas>
                <div className="block w-1/3 text-center ">
                    <AddTarea></AddTarea>
                    <button className="bg-red-500 border-4 border-red-700 text-xl w-2/3 rounded-md" onClick={() => this.handleLoguot()}>Cerrar Sesion</button>
                </div>
            </div>
        );
    }

}

export default withRouter(Tareas);