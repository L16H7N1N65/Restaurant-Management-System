import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import EmployeeManager from "./views/managers/EmployeeManager";
import RestaurantManager from "./views/managers/RestaurantManager";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/restaurants" component={RestaurantManager} />
        <Route path="/employees" component={EmployeeManager} />
      </div>
    </Router>
  );
}

export default App;

