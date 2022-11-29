import "./styles/App.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/Home";
import File from "./views/File";
import PatientListProfessional from "./views/PatientListProfessional";
import NewControl from "./views/NewControl";
import RegistrationForm from "./components/Registration";
import ProfileView from "./components/ProfileView";
import FormR from "./views/FormR";
import PatientHome from "./views/PatientHome";
import PatientBackground from "./views/PatientBackground";
import PatientDrugs from "./views/PatientDrugs"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-registration" element={<FormR/>} />
        <Route path="/pathology" element={<File />} />
        <Route path="/patient-list" element={<PatientListProfessional />} />
        <Route path="/new-control" element={<NewControl />} />
        <Route path="/patient-home" element={<PatientHome/>}/>
        <Route path="/background" element={<PatientBackground/>}/>
        <Route path="/drugs" element={<PatientDrugs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
