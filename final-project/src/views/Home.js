import React, { useContext } from "react";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import NavbarPresentation from "../components/NavbarPresentation";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className=" ">
     <Header />
     <NavbarPresentation />
     <Presentation />
     <Footer/>
    </div>
  );
}

export default Home;
