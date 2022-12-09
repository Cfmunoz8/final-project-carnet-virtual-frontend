import { BiEraser } from "react-icons/bi";

export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      patients: [],
      caregiver: [],
      clinicalRecord: [],
      drugs: [],
      patient: [],
      controls: [],
      pathologies: [],
      surgeries: [],
      alergies: [],
      habits: [],
      professionals: [],
      pathologys: [],
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
              setStore({ patient: result.data })
              localStorage.setItem("access_token", result.access_token);
            }

            if (localStorage.getItem("access_token")) {
              navigate("/patient-home");
            }
          })
          .catch((error) => console.error("Error:", error));
      },

      getPathology: () => {
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/pathology"
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ pathology: data });
          });
      },

      addPathology: (data) => {
        const addPathology = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-nzh345vsx60.ws-us77.gitpod.io/add_pathology", addPathology)
          .then((res) => res.json())
          .then((result) => setStore({ Pathology: result }))
      },

      loginProfessional: (info, navigate) => {
        console.log("info", info)
        const postLogin = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-wwz2lyas2xk.ws-us77.gitpod.io/login_professional",
          postLogin
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.msg != "rut o contraseña incorrecta") {
              localStorage.setItem("access_token", result.access_token);
            }

            if (localStorage.getItem("access_token")) {
              navigate("/patient-list");
            }
          })
          .catch((error) => console.error("Error:", error));
      },

      getPatients: () => {
        const token = localStorage.getItem("access_token")
        console.log("token", token)
        const getMethod = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/patient_list", getMethod
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
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/drugs", method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ drugs: data });
          });
      },
      getClinicalRecord: () => {
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/get_clinical_record", method)
          .then((response) => response.json())
          .then((data) => {
            setStore({ clinicalRecord: data });
          });
      },

      getCaregiver: () => {
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/get_caregiver", method)
          .then((response) => response.json())
          .then((data) => {
            setStore({ caregiver: data });
          });
      },

      getControls: () => {
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/get_controls", method)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setStore({ controls: data });
          });
      },

      getPathologies: () => {
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/pathologies", method)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setStore({ pathologies: data });
          });
      },

      getSurgeries: () => {
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/surgeries", method)
          .then((response) => response.json())
          .then((data) => {
            setStore({ surgeries: data });
          });
      },

      getHabits: () => {
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/habits", method)
          .then((response) => response.json())
          .then((data) => {
            setStore({ habits: data });
          });
      },

      getAlergies: () => {
        const token = localStorage.getItem("access_token")
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
        fetch("https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/alergies", method)
          .then((response) => response.json())
          .then((data) => {
            setStore({ alergies: data });
          });
      },
      
        addNewProfessional: (data) => {
        const addNewProfessional = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-611qqxdbe0s.ws-us78.gitpod.io/add_professional", addNewProfessional)
          .then((res) => res.json())
          .then((result) => setStore({ professionals: result }))
      },

      addNewPatient: (data) => {
        const addNewPatient = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-611qqxdbe0s.ws-us78.gitpod.io/add_patient", addNewPatient)
          .then((res) => res.json())
          .then((result) => setStore({ patients: result }))
      }
        
    },
  };
};
