import React from "react";
import Header from "./components/Header/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { About } from "./components/About/About";
import { Startups } from "./components/Services/Startups/Startups";
import { Investors } from "./components/Services/Investors/Investors";
import { Mentorships } from "./components/Services/Mentorships/Mentorships";
import { Resources } from "./components/Enable/Resources/Resources";
import { E4GCommunity } from "./components/Enable/E4GCommunity/E4GCommunity";
import { Contact } from "./components/Contact/Contact";
// import { BusinessTools } from "./components/BusinessTools/BusinessTools";
import { Signup } from "./components/SignUp/Signup";
import { Login } from "./components/Login/Login";
import { InvestorLogin } from "./components/Login/Investor-Login";
import InvestorSignup from "./components/SignUp/Investor-Signup";
import { InvestorForgotPassword } from "./components/SignUp/Investor-Forgot-Password";
import { Accounting } from "./components/Grow/Accounting";
import { FinancialPlanning } from "./components/Grow/FinancialPlanning";
import { DigitalMarketing } from "./components/Grow/DigitalMarketing";
import { SocialMediaMarketing } from "./components/Grow/SocialMediaMarketing";
import { SEOMarketing } from "./components/Grow/SEOMarketing";
import { ContentMarketing } from "./components/Grow/ContentMarketing";
import { TimeManagement } from "./components/Grow/TimeManagement";
import Second from "./components/Enable/Resources/Articles/Second";
import First from "./components/Enable/Resources/Articles/First";
import Visteblogs from "./components/Enable/Resources/Visteblogs";
import Vistpod from "./components/Enable/Resources/Visitpod";
import Blogfirst from "./components/Enable/Resources/Blogs/Blogfirst";
import Blogsecond from "./components/Enable/Resources/Blogs/Blogsecond";
import Blogthird from "./components/Enable/Resources/Blogs/Blogthird";
import Fourth from "./components/Enable/Resources/Articles/Fourth";
import Book from "./components/Enable/Resources/Book";
import UserDetails from "./components/Login/userDetails";
import Profile  from "./components/Login/Profile";
import UserDashboard from "./components/Login/UserDashboard";
import FindInvestor from "./components/Login/FindInvestor";
import FindMentor from "./components/Login/FindMentor";
import { FindStartups } from "./components/Login/Investor/FindStartups";
import { MentorsSignup } from "./components/Services/Mentorships/MentorsSignup";
import { MentorsLogin } from "./components/Services/Mentorships/MentorsLogin";
import EditProfile from "./components/Login/EditProfile";
import { InvestorDashboard } from "./components/Login/Investor/InvestorDashboard";
import { WebDevelopment } from "./components/Grow/WebDevelopment";
import { MentorDashboard } from "./components/Services/Mentorships/MentorDashboard";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const isInvestorLoggedIn =window.localStorage.getItem("investorLoggedIn");
  
  return (
    <div className="App">
      <Router>
      <Header isLoggedIn= {isLoggedIn ? true :isInvestorLoggedIn? true:false} />
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          {isLoggedIn === "true" ? (
            <>
              <Route path="/" element={<UserDetails />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}

          {/* Investor-specific routes */}
          {isInvestorLoggedIn === "true" ? (
            <>
            <Route path="/investor-dashboard" element={<InvestorDashboard />} />
              <Route path="/find-startups" element={<FindStartups />}/>
              {/* <Route path="/" element={<FindStartups />} /> */}

            </>
          ) : (
            <Route path="/investor-login" element={<InvestorLogin />} />
          )}

          <Route path="/about" element={<About />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/mentorships" element={<Mentorships />} />
          <Route path="/accounting" element={<Accounting />} />
          
          <Route path="/financialplanning" element={<FinancialPlanning />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/smmarketing" element={<SocialMediaMarketing />} />
          <Route path="/seomarketing" element={<SEOMarketing />} />
          <Route path="/contentmarketing" element={<ContentMarketing />} />
          <Route path="/timemangement" element={<TimeManagement />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second/>} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/visteblogs" element={<Visteblogs />} />
          <Route path="/blogfirst" element={<Blogfirst />} />
          <Route path="/blogsecond" element={<Blogsecond />} />
          <Route path="/blogthird" element={<Blogthird />} />
          <Route path="/vistpod" element={<Vistpod />} />
          <Route path="/book" element={<Book />} />
          
          <Route path="/e4gcommunity" element={<E4GCommunity />} />
          {/* <Route path="/businesstools" element={<BusinessTools />} /> */}
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/investor-login" element={<InvestorLogin />}/>
          <Route path="/investor-signup" element={<InvestorSignup />}/>
          <Route path="/forgot-password" element={<InvestorForgotPassword />}/>
          
          <Route path="/mentorships/mentor-signup" element={<MentorsSignup/>}/>
          <Route path="/mentorships/mentor-login" element={<MentorsLogin/>}/>
          <Route path="/mentor-dashboard" element={<MentorDashboard/>}/>
          <Route path="/find-investor" element={<FindInvestor />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/find-mentor" element={<FindMentor />}/>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
