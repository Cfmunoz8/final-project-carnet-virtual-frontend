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
      updatePatient: (id) => {
        const putMethod = {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(
          "https://8080-4geeksacademy-htmlhello-l349w1sqq6b.ws-us77.gitpod.io/update_patient/"+id,
          putMethod
        )
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error));
      },
    },
  };
};
