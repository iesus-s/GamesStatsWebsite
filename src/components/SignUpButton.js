import { Link } from "react-router-dom"
import {Container, Row} from "react-bootstrap";

const SignUpButton = ({label}) => {
  return (
        <div className="flex flex-col justify-center max-w-sm mx-auto mb-5">
            <Link to="/CreateAccount">
                <button type="submit" className="bg-gradient-to-r from-red-500 to-blue-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">{label}</button>
            </Link>
        </div>
  )
}

SignUpButton.defaultProps = {
    label: 'Create Account'
}

export default SignUpButton