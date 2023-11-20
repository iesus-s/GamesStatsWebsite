import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Account from "./pages/Account"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/main.css"

const App = () => {
  return (
    <div className="App container-fluid">
        <NavBar />
        <Login />
        <Account />

    </div>
  );
}

export default App;