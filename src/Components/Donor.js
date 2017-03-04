import React, { Component } from 'react';
import * as firebase from "firebase";


class Donor extends Component {
   constructor(){
       super()
       this.dataSend = this.dataSend.bind(this)
   }

dataSend(){
let Name = this.refs.name.value;
let Address = this.refs.Address.value;
let Blood = this.refs.Blood.value;
let Contact = this.refs.Contact.value;
let Dates = this.refs.Dates.value;  

 let data = firebase.database().ref().child("userDATA");
 data.push({
     Name: Name,
     Address: Address,
     Blood: Blood,
     Contact: Contact,
     Date: Dates 
 })

 console.log(Name, Address, Blood, Contact, Dates)

}


  render() {
    return (
      <div className="App">
          <label>Name</label><br/>
        <input type="text" ref="name"/><br/>
        <label>Address</label><br/>
        <input type="text" ref="Address" /><br/>
        <label>Blood-group</label><br/>
        <input type="text" ref="Blood"/><br/>
        <label>Contact num</label><br/>
        <input type="text" ref="Contact"/><br/>
        <label>Date of Birth</label><br/>
        <input type="text" ref="Dates"/>  

        <button onClick={this.dataSend}>Send Your Data</button>     

      </div>
    );
  }
}

export default Donor;