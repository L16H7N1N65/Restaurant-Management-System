import React, { useState } from 'react';
import axios from 'axios';

function FormEmployee({ onAdd }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [restaurantId, setRestaurantId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length < 3 || lastName.length < 3) {
      setError("The first and last names must be at least 3 characters long");
      return;
    }
    if (!hireDate) {
      setError("Please enter a hire date");
      return;
    }
    if (!restaurantId) {
      setError("Please enter a restaurant ID");
      return;
    }
    axios.post('http://127.0.0.1:5002/api/employees', {
      first_name: firstName,
      last_name: lastName,
      hire_date: hireDate,
      restaurant_id: restaurantId
    })
    .then(response => {
      onAdd(response.data);
      setFirstName("");
      setLastName("");
      setHireDate("");
      setRestaurantId("");
      setError("");
    })
    .catch(error => {
      setError("Error while adding employee");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Hire Date:</label>
        <input type="date" value={hireDate} onChange={(e) => setHireDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Restaurant ID:</label>
        <input type="number" value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default FormEmployee;