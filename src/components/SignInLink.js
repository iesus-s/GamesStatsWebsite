import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SignInLink extends Component {
    render() {
        return (
            <Link to="/login">
                <div className="inline-flex px-3">
            <p><a className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800">Sign In</a></p>
                </div>
            </Link>
        );
    }
}

export default SignInLink;