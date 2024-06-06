import React, { useState } from "react";
import FormEmployee from "../src/components/form/FormEmployee";
import FormRestaurant from "../src/components/form/FormRestaurant";

function App() {
  const [employees, setEmployees] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const handleAddEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  const handleAddRestaurant = (restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);
  };

  return (
    <div className="App">
      <FormEmployee onAdd={handleAddEmployee} />
      {employees.map((employee, index) => (
        <div key={index}>
          <h2>
            {employee.first_name} {employee.last_name}
          </h2>
          <p>Hire Date: {employee.hire_date}</p>
          <p>Restaurant ID: {employee.restaurant_id}</p>
        </div>
      ))}
      <FormRestaurant onAdd={handleAddRestaurant} />
      {restaurants.map((restaurant, index) => (
        <div key={index}>
          <h2>
            {restaurant.name}
          </h2>
          <p>City: {restaurant.city}</p>
          <p>Number of seats: {restaurant.nbcouverts}</p>
          <p>Terrace: {restaurant.terrasse ? 'Yes' : 'No'}</p>
          <p>Parking: {restaurant.parking ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
