export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      patients: [],
      caregivers: [],
      clinicalRecords: [],
      drugs: [],
    },
    actions: {
      loginPatient: (info, navigate) => {
        console.log("info", info)
        const postLogin = {
          method: "POST",
          body: JSON.stringify( info ),
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
            if(result.msg!="contraseña o rut invalido"){
              localStorage.setItem("dataLogin", JSON.stringify(result))
            }
            
            if(localStorage.getItem("dataLogin")){
              navigate("/patient-home")
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
            ;
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
    },
  };
};
