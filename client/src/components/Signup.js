import React, { Component } from "react";
import axios from 'axios';
import "./Signup.css";

class SignupComponent extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    signupFail: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  attemptSignup = () => {

    const {firstname, lastname, email, password} = this.state;
    axios.post('/signup', {
      firstname,
      lastname,
      email,
      password
    }).then(response => {
        this.setState({
          signupFail: false
        });
        this.props.onSuccess(response.email);
        this.props.history.push('/welcome');
    }).catch(response => {
      this.setState({
        signupFail: true
      })
    })
  }

  render() {
    return (
    <div className='signup'>
      <label>
        <h3>First Name</h3>
        <input
        name='firstname'
        value={this.state.firstname}
        onChange={this.handleChange}
        />
      </label>
      <label>
      <h3>Last Name</h3>
      <input
        name='lastname'
        value={this.state.lastname}
        onChange={this.handleChange}
        />
      </label>
      <label>
      <h3>Email</h3>
      <input
        name='email'
        value={this.state.email}
        onChange= {this.handleChange}
      />
      </label>
      <label>
      <h3>Password</h3>
       <input
          name='password'
          type='password'
          value={this.state.password}
          onChange= {this.handleChange}
       />
       </label>
       <label>
       <h3>Confirm Password</h3>
       <input
         name='confirmPassword'
         type='password'
         value={this.state.confirmPassword}
         onChange={this.handleChange}
       />
       </label>
       <button onClick={() => {this.attemptSignup()}}> Signup! </button>

       {this.state.signupFail &&
         <h3>One of the fields contains invalid data. Please ensure that you entered your email and other information correctly!</h3>
       }
   </div>
 )
  }
}

export default SignupComponent
