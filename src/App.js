import Banner from "./components/Banner"
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import ApexLegends from "./components/ApexLegends"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from "react-bootstrap";
import Footer from "./components/Footer";
import CounterStrike from "./components/CounterStrike";
import Valorant from "./components/Valorant";
import SupportPage from "./components/SupportPage";
import AboutUsPage from "./components/AboutUsPage";
import AdsPage from "./components/AdsPage";

const App = () => {
    let Component
    switch (window.location.pathname){
        case "/":
            Component = <HomePage />
            break;
        case "/homepage":
            Component = <HomePage />
            break;
        case "/apexlegends":
            Component = <ApexLegends />
            break;
        case "/counterstrike":
            Component = <CounterStrike />
            break;
        case "/valorant":
            Component = <Valorant />
            break;
        case "/support":
            Component = <SupportPage />
            break;
        case "/aboutus":
            Component = <AboutUsPage />
            break;
        case "/ads":
            Component = <AdsPage />
            break;
        case "/loginform":
            Component = <LoginForm />
    }
  return (
        <div className="App container-fluid">
            <NavBar />
            <Banner />
            {Component}
            <Footer />
        </div>
  );
}

export default App;
