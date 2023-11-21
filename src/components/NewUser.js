import React, {Component} from 'react';
import {Link} from "react-router-dom";

const NewUser = ({label}) => {
    return (
            <div className="flex flex-col justify-center max-w-sm mx-auto mb-5">
                <Link to="/ads">
                    <button type="submit" className="bg-gradient-to-r from-indigo-600 to-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mx-auto">{label}</button>
                </Link>
            </div>
    )
}


NewUser.defaultProps = {
    label: 'Sign Up'
}

export default NewUser;