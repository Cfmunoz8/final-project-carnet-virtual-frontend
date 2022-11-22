import React from "react";
import { FaUserNurse } from "react-icons/fa";

function Presentation() {
    return (
        <div className="row">
            <div className="card text-bg-light m-5 p-5 col-4" style={{ width: "18rem" }}>
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
                        <button className="btn  btn-outline-secondary" type="button">Registrate aqui</button>

                    </div>
                </div>
            </div>
            <div className=" text-center col-4 m-5 p-5">
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
