import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantList from "./views/RestaurantList";
import AddRestaurant from "./views/AddRestaurant";
import EmployeeList from "./views/EmployeeList";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const result = await axios("http://restaurants:5002/api/restaurant");
      setRestaurants(result.data);
    };

    const fetchEmployees = async () => {
      const result = await axios("http://employees:5002/api/employee");
      setEmployees(result.data);
    };

    fetchRestaurants();
    fetchEmployees();
  }, []);

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="App">
      <AddRestaurant onAdd={addRestaurant} />
      <RestaurantList restaurants={restaurants} />
      <EmployeeList onAdd={addEmployee} employees={employees} />
    </div>
  );
}

export default App;

// cd /c/Users/ACS/Documents/nodejs/node-express-app/clients/node_modules
// ln -s /c/Users/ACS/Documents/nodejs/node-express-app/clients/components components
