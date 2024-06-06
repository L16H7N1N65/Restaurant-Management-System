import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { list_restaurants, delete_a_restaurant, create_a_restaurant } from '../../actions/restaurantAction';
import FormRestaurant from "../../components/form/FormRestaurant";
import Message from "../../components/messages/Message";
import Loader from "../../components/loaders/Loader";

function RestaurantManager() {
  const dispatch = useDispatch();
  const restaurantList = useSelector(state => state.restaurantList);
  const { loading, error, restaurants } = restaurantList;

  useEffect(() => {
    dispatch(list_restaurants());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("You want to delete this restaurant and its employees ?")) {
      dispatch(delete_a_restaurant(id));
    }
  };

  const handleAdd = (restaurant) => {
    dispatch(create_a_restaurant(restaurant));
  };

  return (
    <div className="container mx-auto p-4">
      <FormRestaurant onAdd={handleAdd} />
      <button onClick={() => dispatch(list_restaurants())} className="bg-blue-500 text-white px-4 py-2 rounded">
        Update
      </button>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
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
      )}
    </div>
  );
}

export default RestaurantManager;

