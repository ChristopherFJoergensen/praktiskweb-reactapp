import React from 'react'
import Header from "./Assets/Components/Header/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Forside from "./Assets/Pages/Forside"

function App() {
  return (
    
    <Router>

    <Header/>

    <div className="App">
      <Switch>
        <Route to="/" component={Forside} />
        <Route to="/home" component={Forside} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
