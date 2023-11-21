import { Link } from "react-router-dom";

const ForgotPasswordLink = () => {
  return (
      <Link to="/ads">
        <div className="inline-flex px-3">
            <p><a className="inline-block align-baseline justify-content-center font-bold text-sm text-red-500 hover:text-red-800">Forgot Password?</a></p>
        </div>
      </Link>
  )
}

export default ForgotPasswordLink