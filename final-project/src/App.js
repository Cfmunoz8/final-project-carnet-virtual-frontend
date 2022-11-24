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
import ProfessionalLogin from "./views/ProfessionalLogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-registration" element={<FormR/>} />
        <Route path="/pathology" element={<File />} />
        <Route path="/patient-list" element={<PatientListProfessional />} />
        <Route path="/new-control" element={<NewControl />} />
        <Route path="/professional-login" element={<ProfessionalLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
