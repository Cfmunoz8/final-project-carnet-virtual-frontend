import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { Context } from "../store/context";
import swal from "sweetalert";


function RegistrationForm() {

    const alerta = () =>(swal("Paciente creado exitosamente"))

    const { store, actions } = useContext(Context);
    const [infoPatient, setInfoPatient] = useState();
    const onChange = (e) => {

        setInfoPatient({ ...infoPatient, [e.target.name]: e.target.value })
    }
    useEffect(() => { }, [infoPatient])
    const submitForm = (e) => {
        e.preventDefault()

        actions.addNewPatient(infoPatient)
    }



    return (
        <div className="p-5">
            <div className="">
                <div className="col-lg-4 bg-white m-auto">
                    <h2 className="text-center pt-3">Registrate</h2>
                    <span className="text-center text-muted lead">Crea tu cuenta</span>
                    <form id="form" action="#" className="" onSubmit={submitForm}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaUserAlt /></span>
                            <input type="text" name="name" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaUserAlt /></span>
                            <input type="text" name="lastname" className="form-control" placeholder="Apellido Paterno" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />


                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Rut</span>
                            <input type="text" name="rut" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                            <input type="email" name="email" className="form-control" placeholder="Example@mail.com" aria-label="Email" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Edad</span>
                            <input type="text" name="age" className="form-control" placeholder="" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">fecha de Nacimiento</span>
                            <input type="date" name="birth_date" className="form-control" placeholder="Example@mail.com" aria-label="Email" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Dirección</span>
                            <input type="text" name="address" className="form-control" placeholder="" aria-label="Email" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Teléfono</span>
                            <input type="text" name="phone_number" className="form-control" placeholder="" aria-label="teléfono" aria-describedby="basic-addon1" onChange={(e) => onChange(e)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Genero</span>
                            <select className="form-select form-select-sm" name="gender" aria-label=".form-select-sm example" onChange={(e) => onChange(e)}>
                                <option selected>Seleccione un Genero</option>
                                <option value="male">Masculino</option>
                                <option value="female">Femenino</option>
                            </select>
                        </div>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">
                                    <span className="input-group-text" id="basic-addon1">Contaseña</span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <input type="password" name="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" onChange={(e) => onChange(e)} />
                            </div>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label for="inputPassword6" className="col-form-label">
                                        <span className="input-group-text" id="basic-addon1">Confirmar contraseña</span>
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" onChange={(e) => onChange(e)} />
                                </div>

                            </div>
                        </div>
                        <button className="btn btn-primary my-5" type="submit" onClick={()=>alerta()}> Registrate </button>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default RegistrationForm;