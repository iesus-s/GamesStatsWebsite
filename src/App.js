import Banner from "./components/Banner"
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import ApexLegends from "./components/ApexLegends"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import CounterStrike from "./components/CounterStrike";
import Valorant from "./components/Valorant";
import SupportPage from "./components/SupportPage";
import AboutUsPage from "./components/AboutUsPage";
import AdsPage from "./components/AdsPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
        <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/games" element={<ApexLegends />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                    <Route path="/Ads" element={<AdsPage />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                </Routes>
            </div>
      </>
  );
}

export default App;
