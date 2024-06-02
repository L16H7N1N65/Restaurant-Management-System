// employeeActions.js

import axios from 'axios';
import {
  EMPLOYEE_ALL_FAIL,
  EMPLOYEE_ALL_REQUEST,
  EMPLOYEE_ALL_SUCCESS,

  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,

  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,

  EMPLOYEE_DETAILS_FAIL,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,

  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
} from '../constants/employeeConstant';

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_CREATE_REQUEST });

    const { data } = await axios.post('/api/employees', employee);

    dispatch({
      type: EMPLOYEE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const listEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_LIST_REQUEST });

    const { data } = await axios.get('/api/employees');

    dispatch({
      type: EMPLOYEE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_UPDATE_REQUEST });

    const { data } = await axios.put(`/api/employees/${employee.id}`, employee);

    dispatch({
      type: EMPLOYEE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_UPDATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_DELETE_REQUEST });

    await axios.delete(`/api/employees/${id}`);

    dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const listAllEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_ALL_REQUEST });

    const { data } = await axios.get('/api/employees/all');

    dispatch({
      type: EMPLOYEE_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_ALL_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getEmployeeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/employees/${id}`);

    dispatch({
      type: EMPLOYEE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

