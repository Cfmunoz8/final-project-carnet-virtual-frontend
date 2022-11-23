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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-registration" element={<FormR/>} />
        <Route path="/pathology" element={<File />} />
        <Route path="/patient-list" element={<PatientListProfessional />} />
        <Route path="/new-control" element={<NewControl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
