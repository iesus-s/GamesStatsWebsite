import Banner from "./components/Banner"
import LoginForm from "./components/LoginForm";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App container-fluid">
        <NavBar />
        <Banner />
        <AboutUs/>

    </div>
  );
}

export default App;
