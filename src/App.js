import login from "pages/login";
import Home from "pages/home";
import join from "pages/join";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return(
    <Router>
        <Route exact = {true} path = "/" component={login}/>
        <Route path = "/home" component={Home}/>
        <Route path = "/join" component={join}/>
    </Router>
  );
}

export default App;
