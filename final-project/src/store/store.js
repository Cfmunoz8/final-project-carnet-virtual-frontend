export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      patients: [],
      professionals: [],

    },
    actions: {

      loginProfessional: (info, navigate) => {
        const postLoginProfessional = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/login_professional",
          postLoginProfessional
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.msg !== "contraseña o rut invalido") {
              localStorage.setItem("dataLoginProfessional", JSON.stringify(result))
            }

            if (localStorage.getItem("dataLoginProfessional")) {
              navigate("/patient-list")
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
            setStore({ patients: data })
            localStorage.setItem("patients", JSON.stringify(data))
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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/update_patient_alive/" + id,
          putMethod
        )
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((error) => console.error("Error:", error));
      },

      addProfessional: () => {
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/add_professional"
        )
          .then((response) => response.json())
          .then((data) => setStore({ patients: data }));
      },
    },
  };
};
