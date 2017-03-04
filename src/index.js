import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router ,Route , IndexRoute , browserHistory} from "react-router"
import Login from "./Components/Login"
import signup from "./Components/signup"
import Home from "./Components/Home"
import Welcome from "./Components/welcome"


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
      
    <Route path="/Login" component={Login} />
    
    <Route path="/signup" component={signup} />
    <Route path="/Welcome" component={Welcome} />
    
    
  {/*//browserHistory.push("/About")*/}
    </Router>,
  document.getElementById('root')
);


// function reducer (state,action)
// {
//   switch(action.type)
//   {
//     case "INCREMENT":
//     return  newState
//   }
// }


// store.dispatch(
//   return {
//     type: "INCREMENT"
//   }
// )
