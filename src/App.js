import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ApexLegends from "./components/ApexLegends"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import CounterStrike from "./components/CounterStrike";
import Valorant from "./components/Valorant";
import SupportPage from "./components/SupportPage";
import AboutUsPage from "./components/AboutUsPage";
import AdsPage from "./components/AdsPage";
import Account from "./pages/Account"
import {Route, Routes} from "react-router-dom";

import Apex from "./pages/Apex";

import CreateAccount from "./components/CreateAccount";
import Friends from "./components/Friends";
import CSGO from "./components/CSGO"


function App() {
  return (
      <>
        <NavBar />
            <div className="container-fluid">
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/apex" element={<Apex />} />
                    <Route path="/csgo" element={<CSGO />} />
                    <Route path="/valorant" element={<Valorant />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/Ads" element={<AdsPage />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/CreateAccount" element={<CreateAccount />} />
                </Routes>
            </div>
          <Footer />
      </>
  );
}

export default App;
