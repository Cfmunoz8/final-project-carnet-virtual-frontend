import React, { useContext } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";



function Home() {
  return (
    <div className=" ">
     <Header />
     <Navbar />
     <Presentation />
    </div>
  );
}

export default Home;
