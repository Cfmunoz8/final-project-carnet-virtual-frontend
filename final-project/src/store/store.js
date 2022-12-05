import { BiEraser } from "react-icons/bi";

export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      patients: [],
      caregivers: [],
      clinicalRecords: [],
      drugs: [],
      patient: {},
    },
    actions: {
      loginPatient: (info, navigate) => {
        console.log("info", info);
        const postLogin = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/login_patient",
          postLogin
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.msg != "contraseña o rut invalido") {
              setStore({patient: result.data})
              localStorage.setItem("acess_token", result.acess_token);
            }

            if (localStorage.getItem("acess_token")) {
              navigate("/patient-home");
            }
          })
          .catch((error) => console.error("Error:", error));
      },

      getPatients: () => {
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/patient_list"
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ patients: data });
          });
      },

      updatePatientAlive: (id) => {
        const putMethod = {
          method: "PUT",
          body: JSON.stringify({ alive: false }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/update_patient_alive/" +
            id,
          putMethod
        )
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((error) => console.error("Error:", error));
      },
      
      getDrugs: () => {
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/drugs"
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ drugs: data });
          });
      },
      getClinicalRecord: () => {
        const token = localStorage.getItem("acess_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/get_clinical_record", method)
        .then((response) => response.json())
        .then((data) => {
          setStore({ clinicalRecords: data });
        });
      }
    },
  };
};
