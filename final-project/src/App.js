import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/Home";
import PatientListProfessional from "./views/PatientListProfessional";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient-list" element={<PatientListProfessional/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
