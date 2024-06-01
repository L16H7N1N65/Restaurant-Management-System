import React, { useState, useEffect } from 'react';
import axios from 'axios';
import tableAddRestaurant from '../table/tableAddRestaurant';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://127.0.0.1:5002/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        setError("Loading error @RestaurantList.js");
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("You want to delete this restaurant and its employees ?")) {
      axios.delete(`http://127.0.0.1:5002/restaurants/${id}`)
        .then(() => {
          setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
        })
        .catch(error => {
          setError("Error while deleting restaurant");
        });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => window.location.reload()} className="bg-blue-500 text-white px-4 py-2 rounded">
        Update
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc list-inside">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="my-2 flex justify-between items-center">
            {restaurant.name} - {restaurant.city} - {restaurant.nbcouverts} - {restaurant.terrasse} - {restaurant.parking}
            <button onClick={() => handleDelete(restaurant.id)} className="bg-red-500 text-white px-2 py-1 rounded ml-4">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;


