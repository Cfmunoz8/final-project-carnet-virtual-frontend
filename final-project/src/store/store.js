export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      patients: [],
      professionals: [],
      pathologys: [],

    },
    actions: {

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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/add_pathology", addPathology)
          .then((res) => res.json())
          .then((result) => setStore({ Pathology: result }))
      },



      loginProfessional: (info, navigate) => {
        console.log("info",info)
        const postLogin = {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-cfmunoz8-finalprojectca-gxssvq1sc5o.ws-us77.gitpod.io/login_professional",
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
        console.log("token",token)
        const getMethod = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token 
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/patient_list", getMethod
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("data",data)
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
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/update_patient_alive/" + id,
          putMethod
        )
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((error) => console.error("Error:", error));
      },
    },
  };
};
