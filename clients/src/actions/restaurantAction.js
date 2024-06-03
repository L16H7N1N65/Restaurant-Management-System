import axios from 'axios';

export const list_restaurants = () => async dispatch => {
  try {
    const res = await axios.get('/api/restaurants');
    dispatch({ type: 'LIST_RESTAURANTS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LIST_RESTAURANTS_FAIL', payload: err.message });
  }
};

export const create_a_restaurant = (data) => async dispatch => {
  try {
    const res = await axios.post('/api/restaurants', data);
    dispatch({ type: 'CREATE_RESTAURANT_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'CREATE_RESTAURANT_FAIL', payload: err.message });
  }
};

export const read_a_restaurant = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/restaurants/${id}`);
    dispatch({ type: 'READ_RESTAURANT_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'READ_RESTAURANT_FAIL', payload: err.message });
  }
};

export const update_a_restaurant = (id, data) => async dispatch => {
  try {
    const res = await axios.put(`/api/restaurants/${id}`, data);
    dispatch({ type: 'UPDATE_RESTAURANT_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'UPDATE_RESTAURANT_FAIL', payload: err.message });
  }
};

export const delete_a_restaurant = (id) => async dispatch => {
  try {
    await axios.delete(`/api/restaurants/${id}`);
    dispatch({ type: 'DELETE_RESTAURANT_SUCCESS', payload: id });
  } catch (err) {
    dispatch({ type: 'DELETE_RESTAURANT_FAIL', payload: err.message });
  }
};