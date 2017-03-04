import React, { Component } from 'react';
import { Link } from 'react-router';
import {  browserHistory} from "react-router"

import * as firebase from "firebase";
 var config = {
    apiKey: "AIzaSyDTGNF5x6-YH0Aufcoxy4zLeA41b0sdreo",
    authDomain: "blood-bank-61e13.firebaseapp.com",
    databaseURL: "https://blood-bank-61e13.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "712965868134"
  };
  firebase.initializeApp(config);



class Login extends Component {
  constructor(props){
    super(props)
    this.signupp =this.signupp.bind(this)
    this.login = this.login.bind(this)
    
}

signupp(){

const email = this.refs.email.value;
const pass = this.refs.pass.value;
const auth = firebase.auth();
const signin = auth.createUserWithEmailAndPassword(email , pass).then(
  console.log('success')
);
}


//login form k liye hai yai
login(){

const email = this.refs.email.value;
const pass = this.refs.pass.value;

const auth = firebase.auth();
const signin = auth.signInWithEmailAndPassword(email , pass).then((result)=>{
  browserHistory.push("/Welcome")
});
}



  render() {
    return (
      
       <div className="App">

                <input id="txtEmail" ref="email" type="email" placeholder="Email" /><br />
                <input id="txtpassword" type="password" ref="pass" placeholder="password" /><br />
                <Link to="/signup" className="about" >Signup</Link>          
                <Link to="/Login" className="about" onClick={this.login}>Login </Link>
                
                {/*<button onClick={this.signupp} id="btnsignupp" className="btn btn-danger">signuppp</button>*/}
                {/*<button onClick={this.login} id="btnLogin" className="btn btn-primary">Login</button>*/}
                
                

                          <div>
      
        </div>
                {this.props.children}             


            </div>);


  }
}

export default Login;
