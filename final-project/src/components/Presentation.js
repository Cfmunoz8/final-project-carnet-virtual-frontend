import React, { useContext, useState, useEffect } from "react";
import { FaUserNurse } from "react-icons/fa";
import { Link , useNavigate } from "react-router-dom";
import { Context } from "../store/context";

function Presentation() {

const { store, actions } = useContext(Context);
const [infoLogin, setInfoLogin] = useState();
let navigate = useNavigate();
const onChange = (e) => {
    console.log({[e.target.name]:e.target.value})
setInfoLogin({...infoLogin,[e.target.name]:e.target.value})
} 
useEffect(() => {
console.log("useffect",infoLogin)
}, [infoLogin])
const submitForm = (e) => { e.preventDefault()
    console.log("infologin", infoLogin)
    actions.loginPatient(infoLogin, navigate)
}
    return (
        <div className="row">
            <div className="card text-bg-light m-5 p-5 col-4" style={{ width: "18rem" }}>
                 <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <div className="text-center">
                            <h1>Ingresa</h1>
                        </div>
                        <label for="exampleFormControlInput1" className="form-label">Ingresa tu rut:</label>
                        <input type="rut" name="rut" className="form-control" id="exampleFormControlInput1" placeholder="RUT" onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput2" className="form-label">Ingresa tu contraseña:</label>
                        <input type="password" name="password" className="form-control" id="exampleFormControlInput2" placeholder="Contraseña" onChange={(e) => onChange(e)}/>
                        <div class="d-grid gap-2 pt-5">
                            <button className="btn btn-info btn-lg p-3" type="submit" >Ingresar</button>
                            <button type="button" className="btn btn-link pt-3">¿Olvidaste tu contraseña?</button>
                            <Link className="btn  btn-outline-secondary" to={"/form-registration"}  type="button">Registrate aqui</Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className=" text-center col-4 p-5">
                <h2>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
            </div>
            <div className=" m-5 col-4">
            <img src="https://c8.alamy.com/compes/2bgj7k6/juego-de-personajes-de-dibujos-animados-de-personas-mayores-pareja-mayor-enamorada-icono-de-diseno-plano-aislar-en-la-ilustracion-blanca-2bgj7k6.jpg" className="img-fluid" alt="..."/>
            </div>
        </div>


    );
}

export default Presentation;
