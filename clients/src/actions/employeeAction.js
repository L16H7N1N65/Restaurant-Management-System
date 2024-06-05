// employeeActions.js
require ("../../../backend/routes/employeesRoutes");


import axios from 'axios';

export const createEmployee = (employeeData) => async dispatch => {
  dispatch({ type: 'EMPLOYEE_CREATE_REQUEST', payload: employeeData });
  try {
    const { data } = await axios.post('/api/employees', employeeData);
    dispatch({ type: 'EMPLOYEE_CREATE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'EMPLOYEE_CREATE_FAIL', payload: error.message });
  }
};

export const getEmployees = (restaurantId) => async dispatch => {
  dispatch({ type: 'EMPLOYEE_GET_ALL_REQUEST', payload: restaurantId });
  try {
    const { data } = await axios.get(`/api/employees?restaurant_id=${restaurantId}`);
    dispatch({ type: 'EMPLOYEE_GET_ALL_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'EMPLOYEE_GET_ALL_FAIL', payload: error.message });
  }
};

export const getEmployee = (id, restaurantId) => async dispatch => {
  dispatch({ type: 'EMPLOYEE_GET_REQUEST', payload: { id, restaurantId } });
  try {
    const { data } = await axios.get(`/api/employees/${id}?restaurant_id=${restaurantId}`);
    dispatch({ type: 'EMPLOYEE_GET_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'EMPLOYEE_GET_FAIL', payload: error.message });
  }
};

export const updateEmployee = (employeeData) => async dispatch => {
  dispatch({ type: 'EMPLOYEE_UPDATE_REQUEST', payload: employeeData });
  try {
    const { data } = await axios.put(`/api/employees/${employeeData.id}`, employeeData);
    dispatch({ type: 'EMPLOYEE_UPDATE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'EMPLOYEE_UPDATE_FAIL', payload: error.message });
  }
};

export const deleteEmployee = (id, restaurantId) => async dispatch => {
  dispatch({ type: 'EMPLOYEE_DELETE_REQUEST', payload: { id, restaurantId } });
  try {
    const { data } = await axios.delete(`/api/employees/${id}?restaurant_id=${restaurantId}`);
    dispatch({ type: 'EMPLOYEE_DELETE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'EMPLOYEE_DELETE_FAIL', payload: error.message });
  }
};

export const deleteEmployeeById = (id) => async dispatch => {
  dispatch({ type: 'EMPLOYEE_DELETE_BY_ID_REQUEST', payload: id });
  try {
    const { data } = await axios.delete(`/api/employees/${id}`);
    dispatch({ type: 'EMPLOYEE_DELETE_BY_ID_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'EMPLOYEE_DELETE_BY_ID_FAIL', payload: error.message });
  }
};