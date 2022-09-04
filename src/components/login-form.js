import React, {Component} from "react";

export default class LoginForm extends Component {
    render() {
      return (
        //Can only return 1 result, so have to wrap everything inside a div
        <div className="container" style={{border: "solid 3px"}}>
            {/* Label in h3 */}
            <h3>Log In</h3>
            {/* it's login FORM, so putting inside form tags */}
                <form>
                    {/* username input field, inside a div so they don't run side by side with the password field*/}
                    <div className="mb-3">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username"></input>
                    </div>
                    {/* password input field, as above */}
                    <div className="mb-3">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password"></input>
                    </div>
                    {/* needs a submit button */}
                    <button type="submit" className="btn btn-primary" name="sumbit">Submit</button>
                </form>
        </div>
      );
    }
}