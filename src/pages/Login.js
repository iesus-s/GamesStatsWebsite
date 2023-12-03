import LoginForm from "../components/LoginForm"
import Banner from "../components/Banner"
import axios from "axios"

const baseURL = "";

const Login = () => {
  const [post, setPost] = React.useState(null);
  
  React.useEffect(() =>{
    axios.get(baseURL).then((Response))


  })

  return (
    <div>
        <Banner />
        <LoginForm />
    </div>
  )
}

export default Login