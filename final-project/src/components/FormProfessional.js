import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function FormProfessional() {
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
                            <input type="number" class="form-control" placeholder="Rut" aria-label="number" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Email</span>
                            <input type="email" class="form-control" placeholder="Example@mail.com" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Profesion</span>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Elija su profesion</option>
                                <option value="1">Medico/a</option>
                                <option value="2">Enfermera/o</option>
                                <option value="3">Kinesiologo/a</option>
                                <option value="4">Nutricionista</option>
                                <option value="5">Psicologo/a</option>
                                <option value="6">Trabajador/a Social</option>
                                <option value="7">Odontologo/a</option>
                                <option value="8">Podologo/a</option>
                                <option value="9">Tecnico en Enfermeria</option>
                            </select>
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

export default FormProfessional;