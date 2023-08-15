import Header from "./components/Header/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Caraousel } from "./components/Caraousel/Caraousel";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { About } from "./components/About/About";
import { Startups } from "./components/Services/Startups/Startups";
import { Investors } from "./components/Services/Investors/Investors";
import { Mentorships } from "./components/Services/Mentorships/Mentorships";
import { Contact } from "./components/Contact/Contact";
import { BusinessTools } from "./components/BusinessTools/BusinessTools";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <LandingPage />
          <Routes>
            <Route exact path="/" render={()=>{
            return(
              <div>
                <LandingPage />
                <Caraousel />
              </div>
            )
            }}/>
            <Route path="/about" element={<About />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/mentorships" element={<Mentorships />} />
            <Route path="/businesstools" element={<BusinessTools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;