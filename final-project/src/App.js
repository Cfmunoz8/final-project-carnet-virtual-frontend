import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/Home";
import PatientListProfessional from "./views/PatientListProfessional";
import NewControl from "./views/NewControl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient-list" element={<PatientListProfessional />} />
        <Route path="/new-control" element={<NewControl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
