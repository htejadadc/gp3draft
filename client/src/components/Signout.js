import React, { Component } from "react";
import axios from 'axios';
import "./Signout.css";

class SignoutComponent extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      email: props.email,
      signoutSuccess: false
    }
  }

  attemptSignout = () => {
    // const {email} = this.state.email;
    console.log(this.state.email);
    this.props.onSuccess();
  }

  render() {
    return (
      <div className='signout'>
        <button onClick={() => {
          this.attemptSignout()
        }}> Sign out! </button>
      </div>
    )
  }

}

export default SignoutComponent
