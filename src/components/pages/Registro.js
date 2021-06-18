import React, { Component } from "react";
import { loginService, registroService } from "../../utils/api/services";
import { withRouter } from "react-router-dom";
import { setToken } from "../../utils/auth/Token";
import "../../css/Login/login.css"
class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleOnInputChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };

    handleRegistro = async () => {
        const { email, password } = this.state;
        let registroResponse = await registroService(email, password);
        if (registroResponse?.success) {
            let loginResponse = await loginService(email, password);
            if (loginResponse?.success) {
                setToken(loginResponse.data.data.token);
                this.props.history.push("/Consular");
            }
        }
    };

    componentDidMount() {
        console.log("Login did mount");
    }

    render() {
        return (
            <div className="Container">
                <div className="Formulario">

                    <h2 className="Titulo">Registro</h2>
                    <input
                        placeholder="email"
                        type="email"
                        required
                        onChange={(event) => this.handleOnInputChange("email", event)}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        required
                        onChange={(event) => this.handleOnInputChange("password", event)}
                    />
                    <button onClick={this.handleRegistro}>Registrarse</button>

                </div>
            </div>
        );
    }
}

export default withRouter(Registro);