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
      alert: "",
      pathology: [],
      surgery: [],
      alergy: [],
      habit: [],
      drug: [],
      successDrug: "",
      pharmacy: [],
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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/login_patient",


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

      logout: (navigate) => {
        localStorage.removeItem("access_token");
        navigate("/");
      },

      getPathology: () => {
        fetch(

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/pathology"

        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ pathology: data });
          });
      },


      addPathology: (infoPathology, setList, list) => {
        const postMethod = {

          method: "POST",
          body: JSON.stringify(infoPathology),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/add_pathology",
          postMethod

        )
          .then((res) => res.json())

          .then((result) => {
            console.log(result);
            setList(!list);
          })
          .catch((error) => console.error("Error:", error));

      },

      loginProfessional: (info, navigate) => {
        const postLogin = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/login_professional",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/patient_list",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/update_patient_alive/" +

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/drugs",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_clinical_record",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_caregiver",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_controls",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/pathologies",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/surgeries",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/habits",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/alergies",

          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ alergies: data });
          });
      },

      addDrug: (drugAndPosology, setList, list) => {
        const postMethod = {
          method: "POST",
          body: JSON.stringify(drugAndPosology),
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/add_drug",

          postMethod
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setList(!list);
          })
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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/professionals",

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/patient/" +

            id,
          getMethod
        )
          .then((response) => response.json())
          .then((data) => setStore({ patient: data }));
      },

      addNewProfessional: (data) => {
        const addNewProfessional = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };

        return fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/add_professional",
          addNewProfessional
        )

          .then((res) => {
            if (res.status === 201) return res.json();
            else return Promise.reject("error");
          })

          .then((result) => setStore({ professionals: result }));
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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/add_patient",
          addNewPatient
        )

          .then((res) => res.json())
          .then((result) => setStore({ patients: result }));
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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_clinical_record/" +

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_caregiver_by_id/" +

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_pathology_by_id/" +

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_surgery_by_id/" +

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_alergy_by_id/" +

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_habit_by_id/" +

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

          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_drug_by_id/" +

            clinical_record_id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ drug: data });
          });
      },

      addControl: (newControl, setList, list) => {
        const postMethod = {
          method: "POST",
          body: JSON.stringify(newControl),

          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/create_control",
          postMethod
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setList(!list);
          })
          .catch((error) => console.error("Error:", error));
      },

      addClinicalRecord: (newClinicalRecord) => {
        const postMethod = {
          method: "POST",
          body: JSON.stringify(newClinicalRecord),

          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/create_clinical_record",

          postMethod
        )
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((error) => console.error("Error:", error));
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
          "https://8080-4geeksacademy-htmlhello-0axywpis0rh.ws-us79.gitpod.io/add_drug",
          postMethod
        )
          .then((res) => res.json())
          .then((result) => {
            if ((result.msg = "medicamento añadido correctamente")) {
              console.log(result);
              setStore({ successDrug: "success adding drug" });
            }
          })
          .catch((error) => console.error("Error:", error));
      },

      addSurgeries: (infoSurgeries,setList,list) => {
        const addSurgery = {
          method: "POST",
          body: JSON.stringify(infoSurgeries),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-0axywpis0rh.ws-us79.gitpod.io/add_surgery",
          addSurgery
        )
        .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setList(!list);
          })
          .catch((error) => console.error("Error:", error));
        },

        addHabit: (infoHabit,setList,list) => {
          const addHabit = {
            method: "POST",
            body: JSON.stringify(infoHabit),
            headers: {
              "Content-Type": "application/json",
            },
          };
          fetch(
            "https://8080-4geeksacademy-htmlhello-0axywpis0rh.ws-us79.gitpod.io/add_habit",
            addHabit
          )
          .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setList(!list);
            })
            .catch((error) => console.error("Error:", error));
          },

          addAlergy: (infoAlergy,setList,list) => {
            const addAlergy = {
              method: "POST",
              body: JSON.stringify(infoAlergy),
              headers: {
                "Content-Type": "application/json",
              },
            };
            fetch(
              "https://8080-4geeksacademy-htmlhello-0axywpis0rh.ws-us79.gitpod.io/add_alergy",
              addAlergy
            )
            .then((res) => res.json())
              .then((result) => {
                console.log(result);
                setList(!list);
              })
              .catch((error) => console.error("Error:", error));
            },

addCaregiver: (caregiver) => {
        const postMethod = {
          method: "POST",
          body: JSON.stringify(caregiver),
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/add_caregiver",
          postMethod
        )
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((error) => console.error("Error:", error));
      },

      getControlById: (clinical_record_id) => {
        const token = localStorage.getItem("access_token");
        const method = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us79.gitpod.io/get_controls_by_id/" +
            clinical_record_id,
          method
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ controls: data });
          });
      },

      getPharmacy: () => {
        const method = {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch("http://farmanet.minsal.cl/index.php/ws/getLocales", method)
          .then((response) => response.json())
          .then((data) => {
            setStore({ pharmacy: data });
          });
      },
    },
  };
};
