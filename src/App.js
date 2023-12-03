import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import ApexLegends from "./components/ApexLegends"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import CounterStrike from "./components/CounterStrike";
import Valorant from "./components/Valorant";
import SupportPage from "./pages/SupportPage";
import AboutUsPage from "./components/AboutUsPage";
import AdsPage from "./components/AdsPage";
import Account from "./pages/Account"
import {Route, Routes} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Apex from "./pages/Apex";
import CreateAccount from "./components/CreateAccount";
import Friends from "./components/Friends";
import CSGO from "./pages/CSGO";
import VALO from "./pages/VALO";


function App() {
  return (
      <>
        <NavBar />
            <div className="container-fluid">
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/apex" element={<Apex />} />
                    <Route path="/csgo" element={<CSGO />} />
                    <Route path="/valorant" element={<VALO />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/Ads" element={<AdsPage />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/CreateAccount" element={<CreateAccount />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
          <Footer />
      </>
  );
}

export default App;
