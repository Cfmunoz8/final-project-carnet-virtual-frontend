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
      pathology: [],
      surgery: [],
      alergy: [],
      habit: [],
      drug: [],
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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/login_patient",
          postLogin
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.msg != "contraseña o rut invalido") {
              setStore({ patient: result.data });
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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/pathology"
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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/add_pathology",
          addPathology
        )
          .then((res) => res.json())
          .then((result) => setStore({ Pathology: result }));
      },

      loginProfessional: (info, navigate) => {
        console.log("info", info);
        const postLogin = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/login_professional",
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
        const token = localStorage.getItem("access_token");
        console.log("token", token);
        const getMethod = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/patient_list",
          getMethod
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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/update_patient_alive/" +
            id,
          putMethod
        )
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((error) => console.error("Error:", error));
      },

      getDrugs: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/drugs",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ drugs: data });
          });
      },

      getClinicalRecord: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_clinical_record",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ clinicalRecord: data });
          });
      },

      getCaregiver: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_caregiver",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ caregiver: data });
          });
      },

      getControls: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_controls",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ controls: data });
          });
      },

      getPathologies: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/pathologies",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ pathologies: data });
          });
      },

      getSurgeries: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/surgeries",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ surgeries: data });
          });
      },

      getHabits: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/habits",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ habits: data });
          });
      },

      getAlergies: () => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/alergies",
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ alergies: data });
          });
      },

      addDrug: (drugAndPosology) => {
        const postMethod = {
          method: "POST",
          body: JSON.stringify(drugAndPosology),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/create_drug/",
          postMethod
        )
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((error) => console.error("Error:", error));
      },

      getProfessionals: () => {
        const token = localStorage.getItem("access_token");
        console.log("token", token);
        const getMethod = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/professionals",
          getMethod
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ professionals: data });
          });
      },

      getPatientById: (id) => {
        const token = localStorage.getItem("access_token");
        const getMethod = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/patient/" +
            id,
          getMethod
        )
          .then((response) => response.json())
          .then((data) => setStore({ patient: data }));
      },

      getClinicalRecordById: (id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_clinical_record/" +
            id,
          method
        )
          .then((response) => response.json())
          .then((data) => setStore({ clinicalRecord: data }));
      },

      getCaregiverById: (id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_caregiver_by_id/" +
            id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ caregiver: data });
          });
      },

      getPathologyById: (clinical_record_id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_pathology_by_id/" +
            clinical_record_id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ pathology: data });
          });
      },

      getSurgeryById: (clinical_record_id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_surgery_by_id/" +
            clinical_record_id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ surgery: data });
          });
      },

      getAlergyById: (clinical_record_id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_alergy_by_id/" +
            clinical_record_id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ alergy: data });
          });
      },

      getHabitById: (clinical_record_id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_habit_by_id/" +
            clinical_record_id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ habit: data });
          });
      },

      getDrugById: (clinical_record_id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us78.gitpod.io/get_drug_by_id/" +
            clinical_record_id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ drug: data });
          });
      },
    },
  };
};
