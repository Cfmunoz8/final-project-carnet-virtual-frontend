export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      patients: [],
    },
    actions: {
      getPatients: () => {
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/patient_list"
        )
          .then((response) => response.json())
          .then((data) => setStore({ patients: data }));
      },
      updatePatientAlive: (id) => {
        const putMethod = {
          method: "PUT",
          body: JSON.stringify({alive: false}),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/update_patient_alive/"+id,
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

      addDrug: (drugAndPosology) => {
        const postMethod = {
          method: "POST",
          body: JSON.stringify(drugAndPosology),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/create_drug/",
          postMethod
        )
          .then((res) => res.json())
          .then((result) => console.log (result))
          .catch((error) => console.error("Error:", error));
      }
    },
  };
};
