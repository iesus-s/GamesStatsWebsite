import React, {Component} from 'react';

class FirstLastName extends Component {
    render() {
        return (
            <div className="flex flex-col justify-center max-w-sm mx-auto mb-5 space-y-8">
                <input type="first_name" className="form-control" placeholder="First Name" id="inputFirstName"></input>
                <input type="last_name" className="form-control" placeholder="Last Name" id="inputLastName"></input>
            </div>
        );
    }
}


export default FirstLastName;