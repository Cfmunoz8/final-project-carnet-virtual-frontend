import React, { useContext, useState, useEffect } from "react";
import { FaUserNurse } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";




function Login() {

    const { store, actions } = useContext(Context);
    const [infoLoginProfessional, setInfoLoginProfessional] = useState();
    let navigate = useNavigate();
    const onChange = (e) => {
        console.log({ [e.target.name]: e.target.value })
        setInfoLoginProfessional({ ...infoLoginProfessional, [e.target.name]: e.target.value })
    }
    useEffect(() => {console.log("useffect",infoLoginProfessional)

    }, [infoLoginProfessional])
    const submitForm = (e) => {
        e.preventDefault()

        actions.loginProfessional(infoLoginProfessional, navigate)
    }


    return (
        <div className="row">
            <div className="card text-bg-light m-5 p-5 " style={{ width: "30rem" }}>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <div className="text-center">
                            <h1>Ingresa</h1>
                        </div>
                        <label for="exampleFormControlInput1" className="form-label">Ingresar tu rut</label>
                        <input type="rut" name="rut" className="form-control" id="exampleFormControlInput1" placeholder="RUT" onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Ingresa tu contraseña</label>
                        <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="Contraseña" onChange={(e) => onChange(e)}/>
                        <div class="d-grid gap-2 pt-5">
                            <button className="btn btn-info btn-lg p-3" type="submit">Ingresar</button>
                            <button type="button" className="btn btn-link pt-3">¿Olvidaste tu contraseña?</button>
                            <Link className="btn  btn-outline-secondary" to={"/registration-professional"} type="button">Registrate aqui</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;