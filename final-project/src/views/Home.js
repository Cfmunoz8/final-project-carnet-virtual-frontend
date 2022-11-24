import React, { useContext } from "react";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import NavbarPresentation from "../components/NavbarPresentation";

function Home() {
  return (
    <div className=" ">
     <Header />
     <NavbarPresentation />
     <Presentation />
    </div>
  );
}

export default Home;
