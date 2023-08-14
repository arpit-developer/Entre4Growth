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
import { About } from "./About";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/about" component={About} />
          </Routes>
      </Router>

      <Header />
      <LandingPage />
      <Caraousel />
      
      <Footer />
    </div>
  );
}

export default App;
