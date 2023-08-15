import Header from "./components/Header/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Caraousel } from "./components/Caraousel/Caraousel";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { About } from "./components/About/About";
import { Startups } from "./components/Services/Startups/Startups";
import { Investors } from "./components/Services/Investors/Investors";
import { Mentorships } from "./components/Services/Mentorships/Mentorships";
import { E4GCommunity } from "./components/Enable/E4GCommunity/E4GCommunity";
import { Contact } from "./components/Contact/Contact";
import { BusinessTools } from "./components/BusinessTools/BusinessTools";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <LandingPage />
                <Caraousel />  
        
          <Routes>
            <Route path="/" render={()=>{
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
            <Route path="/e4gcommunity" element={<E4GCommunity />} />
            <Route path="/businesstools" element={<BusinessTools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;