import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { Context } from "../store/context";
import swal from "sweetalert";
import { formatRut, validRut } from "chilean-rutify";

function RegistrationForm() {


    const { store, actions } = useContext(Context);
    const [infoPatient, setInfoPatient] = useState({ name: "", lastname: "", rut: "", email: "", ege: "", birth_date:"", address:"", phone_number:"", gender:"", password: "", password2: "" });
    const onChange = (e) => {

        setInfoPatient({ ...infoPatient, [e.target.name]: e.target.value })
    }
    useEffect(() => { }, [infoPatient])
    const submitForm = (e) => {
        e.preventDefault()

        if (infoPatient.name === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.lastname === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.rut === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.email === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.age === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.birth_date === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.address === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.phone_number === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.gender === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.password === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        if (infoPatient.password2 === "") {
            swal("Error", "Por favor complete todos los campos")
        }
        else {
            actions.addNewPatient(infoPatient)
            swal("Paciente creado exitosamente")
        }

    }

    const isValidRut = () => {
        if (validRut(infoPatient?.rut) != true) {
          return <p className="text-danger ms-2"> Debes ingresar un RUT válido.</p>;
        }
      };

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
                            <input type="rut" 
                            name="rut" 
                            className="form-control" 
                            placeholder="Ingrese sin punto ni guion" 
                            aria-label="number" 
                            aria-describedby="basic-addon1" 
                            onChange={(e) => onChange(e)} 
                            value={formatRut(infoPatient?.rut)}
                            />
                        </div>
                        {isValidRut()}
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
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
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
                                    <input type="password" name="password2" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" onChange={(e) => onChange(e)} />
                                </div>

                            </div>
                        </div>
                        <button className="btn btn-primary my-5" type="submit" > Registrate </button>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default RegistrationForm;