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
                            <span class="input-group-text" id="basic-addon1">Dirección</span>
                            <input type="text" class="form-control" placeholder="" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Región</span>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Elija su región de residencia</option>
                                <option value="1">Región de Arica y Parinacota</option>
                                <option value="2">Región de Tarapacá</option>
                                <option value="3">Región de Antofagasta</option>
                                <option value="4">Región de Atacama</option>
                                <option value="5">Región de Coquimbo</option>
                                <option value="6">Región de Valparaíso</option>
                                <option value="7">Región Metropolitana</option>
                                <option value="8">Región de O’Higgins</option>
                                <option value="9">Región del Maule</option>
                                <option value="10">Región del Ñuble</option>
                                <option value="11">Región del Biobío</option>
                                <option value="12">Región de La Araucanía</option>
                                <option value="13">Región de Los Ríos</option>
                                <option value="14">Región de Los Lagos</option>
                                <option value="15">Región de Aysén</option>
                                <option value="16">Región de Magallanes</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Teléfono</span>
                            <input type="tel" class="form-control" placeholder="" aria-label="teléfono" aria-describedby="basic-addon1" />
                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">
                                    <span class="input-group-text" id="basic-addon1">Contaseña</span>
                                </label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                            <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">
                                    <span class="input-group-text" id="basic-addon1">Confirmar contraseña</span>
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