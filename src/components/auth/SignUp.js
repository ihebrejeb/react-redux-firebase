import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <button className="btn blue-grey">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
