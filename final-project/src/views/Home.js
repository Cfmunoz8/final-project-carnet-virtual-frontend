import React, { useContext } from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <h1>soy el home</h1>
      <Link to='./RegistrationView' >
        <button className="btn btn-primary"> Sign in </button>
      </Link>
      <Link to='./LoginView' >
        <button className="btn btn-primary"> Log in </button>
      </Link>
    </div>
  );
}

export default Home;
