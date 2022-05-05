import React from "react";
import Navbar from "./pages/navbar/Navbar";
import './style.css'
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destination" component={Destination} />
          <Route exact path="/crew" component={Crew} />
          <Route exact path="/technology" component={Technology} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
