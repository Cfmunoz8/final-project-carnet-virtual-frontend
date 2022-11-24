import React from "react";
import { FaUserNurse } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="">
            <div className="card text-bg-light m-5 p-5 " style={{ width: "30rem" }}>
                <div className="mb-3">
                    <div className="text-center">
                        <h1>Ingresa</h1>
                    </div>
                    <label for="exampleFormControlInput1" className="form-label"></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="RUT" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Contraseña" />
                    <div class="d-grid gap-2 pt-5">
                        <button className="btn btn-info btn-lg p-3" type="button">Ingresar</button>
                        <button type="button" className="btn btn-link pt-3">¿Olvidaste tu contraseña?</button>
                        <Link className="btn  btn-outline-secondary" to={"/registration-professional"} type="button">Registrate aqui</Link>

                    </div>
                </div>
            </div>
         </div>
    );
}

export default Login;