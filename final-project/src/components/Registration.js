import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function RegistrationForm() {
    return (
        <div className="p-5">
            <div className="">
                <div className="col-lg-4 bg-white m-auto">
                    <h2 className="text-center pt-3">Registrate</h2>
                    <span className="text-center text-muted lead">Crea tu cuenta</span>
                    <form id="form" action="#" className="">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><FaUserAlt /></span>
                            <input type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><FaUserAlt /></span>
                            <input type="text" class="form-control" placeholder="Apellido Paterno" aria-label="Username" aria-describedby="basic-addon1" />
                            <input type="text" class="form-control" placeholder="Apellido Materno" aria-label="Username" aria-describedby="basic-addon1" />

                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Rut</span>
                            <input type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Email</span>
                            <input type="email" class="form-control" placeholder="Example@mail.com" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">fecha de Nacimiento</span>
                            <input type="date" class="form-control" placeholder="Example@mail.com" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Direcci??n</span>
                            <input type="text" class="form-control" placeholder="" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Regi??n</span>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Elija su regi??n de residencia</option>
                                <option value="1">Regi??n de Arica y Parinacota</option>
                                <option value="2">Regi??n de Tarapac??</option>
                                <option value="3">Regi??n de Antofagasta</option>
                                <option value="4">Regi??n de Atacama</option>
                                <option value="5">Regi??n de Coquimbo</option>
                                <option value="6">Regi??n de Valpara??so</option>
                                <option value="7">Regi??n Metropolitana</option>
                                <option value="8">Regi??n de O???Higgins</option>
                                <option value="9">Regi??n del Maule</option>
                                <option value="10">Regi??n del ??uble</option>
                                <option value="11">Regi??n del Biob??o</option>
                                <option value="12">Regi??n de La Araucan??a</option>
                                <option value="13">Regi??n de Los R??os</option>
                                <option value="14">Regi??n de Los Lagos</option>
                                <option value="15">Regi??n de Ays??n</option>
                                <option value="16">Regi??n de Magallanes</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Tel??fono</span>
                            <input type="tel" class="form-control" placeholder="" aria-label="tel??fono" aria-describedby="basic-addon1" />
                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">
                                    <span class="input-group-text" id="basic-addon1">Contase??a</span>
                                </label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                            <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">
                                    <span class="input-group-text" id="basic-addon1">Confirmar contrase??a</span>
                                </label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                    Debe ser entre 5 - 15 caracteres de longitud.
                                </span>
                            </div>
                        </div>
                            </div>
                            <button className="btn btn-primary my-5"> Registrate </button>
                    </form>
                </div>
            </div>
            </div>
        
    )
};

export default RegistrationForm;