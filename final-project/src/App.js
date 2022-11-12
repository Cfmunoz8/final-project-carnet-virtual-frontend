import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/Home";
import pathology from "./components/Pathology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathology" element={<File />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
