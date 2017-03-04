import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import * as firebase from "firebase"; 



// Initialize Firebase
      



class signupp extends Component {

 constructor(props){
    super(props)
    this.signupp =this.signupp.bind(this)
    // this.login = this.login.bind(this)
    
}

signupp(){

const email = this.refs.email.value;
const pass = this.refs.pass.value;
const auth = firebase.auth();
const signin = auth.createUserWithEmailAndPassword(email , pass).then((user)=>{
                var firebaseName = firebase.database().ref().child("users");    
                firebaseName.push({Email:email,Password:pass});
                console.log('success')
        })
        // browserHistory
  
  

}
// datapush(ev){
//     var a;
//     var aa;
//     ev.preventDefault();
//     aa = this.refs.Chatapp1.value
//     a = this.refs.Chatapp.value

//     var firebaseName = firebase.database().ref().child("users");    
//     firebaseName.push({Name:aa,Message:a});
//     // a.push(aa);
//     console.log(aa);
//     <a href="#"></a>
//     // console.log(a);
//     this.refs.Chatapp.value = '';
//     // this.refs.Chatapp1.value = '';
//   }

//login form k liye hai yai
// login(){

// const email = this.refs.email.value;
// const pass = this.refs.pass.value;

// const auth = firebase.auth();
// const signin = auth.signInWithEmailAndPassword(email , pass).then(
// console.log('success yooohoooo')

// );
// }



  render() {
    return (
      
       <div className="App">

                <input id="txtEmail" ref="email" type="email" placeholder="Email" /><br />
                <input id="txtpassword" type="password" className="abcc" ref="pass" placeholder="password" /><br />
                <Link to="/signup" className="about"  onClick={this.signupp} >Signup</Link>          
                <Link to="/Login" className="about">Login </Link>
                {/*<Link to="/Login" className="about">Login </Link>*/}
                
                {/*<button onClick={this.signupp} id="btnsignupp" className="btn btn-danger">signuppp</button>
                <button onClick={this.login} id="btnLogin" className="btn btn-primary">Login</button>*/}
                
                {/*<form onSubmit={this.datapush.bind(this)}>
                  <input type="text" ref="Chatapp1" placeholder="Enter Name"/> <br/><br/><br/>        
                  <button onClick="nameBtn()">Enter</button> <br/><br/><br/> 
                  <input type="text" ref="Chatapp" placeholder="Enter Text"/>
                  <button className="btn">Sent</button><br/><br/>
                </form>*/}

                          <div>
          {/*<Link to="/Welcome" className="about">Welcome</Link>          */}
      
        </div>
                {this.props.children}             


            </div>);


  }
}

export default signupp;
