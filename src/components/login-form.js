import React, {Component} from "react";

export default class LoginForm extends Component {
    render() {
      return (
        //Can only return 1 result, so have to wrap everything inside a div
        <div className="container" id="loginArea">
            {/* Label in h3 */}
            <h3>Log In</h3>
            {/* it's login FORM, so putting inside form tags */}
                <form>
                    {/* username input field, inside a div so they don't run side by side with the password field*/}
                    <div className="mb-2">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" id="username" name="username" className="form-control"></input>
                    </div>
                    {/* password input field, as above */}
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" id="password" name="password" className="form-control"></input>
                    </div>
                    {/* needs a submit button */}
                    <button type="submit" className="btn btn-primary" name="sumbit">Submit</button>
                </form>
        </div>
      );
    }
}