import axios from "axios";
import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAIL,

  RESTAURANT_CREATE_REQUEST,
  RESTAURANT_CREATE_SUCCESS,
  RESTAURANT_CREATE_FAIL,

  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,

  RESTAURANT_UPDATE_REQUEST,
  RESTAURANT_UPDATE_SUCCESS,
  RESTAURANT_UPDATE_FAIL,

  RESTAURANT_DELETE_REQUEST,
  RESTAURANT_DELETE_SUCCESS,
  RESTAURANT_DELETE_FAIL,

  RESTAURANT_ALL_REQUEST,
  RESTAURANT_ALL_SUCCESS,
  RESTAURANT_ALL_FAIL,
} from "../constants/restaurantConstant";

// Action for listing RESTAURANTs
export const list_restaurant = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RESTAURANT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/restaurants/tables", config);

    dispatch({
      type: RESTAURANT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Action for adding a restaurant to a table
export const create_a_restaurant = (restaurant) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESTAURANT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/tableAddRestaurant",
      restaurant,
      config
    );

    dispatch({
      type: RESTAURANT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Action for getting details of a table

export const read_a_restaurant = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: RESTAURANT_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/restaurants/ADD_RESTAURANTs/${id}`, config);

    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Action for updating a table
export const update_a_restaurant = (table) => async (dispatch, getState) => {
  try {
    dispatch({ type: RESTAURANT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/restaurants/tables/${table._id}`, table, config);

    dispatch({
      type: RESTAURANT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Action for deleting a table
export const delete_a_restaurant = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: RESTAURANT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/restaurants/tables/${id}`, config);

    dispatch({ type: RESTAURANT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: RESTAURANT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Action for getting all tables
export const list_all_restaurants = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RESTAURANT_ALL_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/restaurants/all", config);

    dispatch({
      type: RESTAURANT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
