import React, { useState } from 'react';
import axios from 'axios';

function FormRestaurant({ onAdd }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [nbcouverts, setNbCouverts] = useState("");
  const [terrasse, setTerrasse] = useState(false);
  const [parking, setParking] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError("The name must be at least 3 characters long");
      return;
    }
    if (city.length < 2) {
      setError("The city name must be at least 2 characters long");
      return;
    }
    if (!Number.isInteger(Number(nbcouverts))) {
      setError("The number of seats must be an integer");
      return;
    }
    axios.post('http://127.0.0.1:5002/api/restaurants', {
      name,
      city,
      nbcouverts,
      terrasse,
      parking
    })
    .then(response => {
      onAdd(response.data);
      setName("");
      setCity("");
      setNbCouverts("");
      setTerrasse(false);
      setParking(false);
      setError("");
    })
    .catch(error => {
      setError("Error while adding restaurant");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nom:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Ville:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de couverts:</label>
        <input type="text" value={nbcouverts} onChange={(e) => setNbCouverts(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Terrasse:</label>
        <input type="checkbox" checked={terrasse} onChange={(e) => setTerrasse(e.target.checked)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Parking:</label>
        <input type="checkbox" checked={parking} onChange={(e) => setParking(e.target.checked)} />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default FormRestaurant;