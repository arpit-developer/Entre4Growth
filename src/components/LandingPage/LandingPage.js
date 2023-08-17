import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { Caraousel } from "../Caraousel/Caraousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css";
import Signup  from "../SignUp/Signup";
import { Login } from "../Login/Login";

function myLogin() {
  return (
      <Login />
  );
}
export const LandingPage = () => {
  const [showDynamicComponent, setShowDynamicComponent] = useState(false);
  const mySignUp = ()=> {
    setShowDynamicComponent(true);
  }
  return (
    <div className="landing-page">
      <div className="heading">
        <h1>
          Entre4Growth
          <p> One Stop Platform for Budding Entreprenuers</p>
        </h1>
        <p>We offer amazing services for entreprenuers</p>
        
        <button onClick={mySignUp}>Get Started</button>
        {/* {showDynamicComponent && <Signup />}  */}
        &nbsp;
        <button onClick={myLogin}>Login</button>
        <br/>
        <button>Register as Investor</button>
      </div>
      <Caraousel />
    </div>
  );
};
