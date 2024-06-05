// employeeReducer.js

import {
  
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,

  EMPLOYEE_GET_FAIL,
  EMPLOYEE_GET_REQUEST,
  EMPLOYEE_GET_SUCCESS,
  
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,

  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,

  EMPLOYEE_DELETE_BY_ID_FAIL,
  EMPLOYEE_DELETE_BY_ID_REQUEST,
  EMPLOYEE_DELETE_BY_ID_SUCCESS,
} from '../constants/employeeConstant';

export const employeeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_CREATE_SUCCESS:
      return { loading: false, success: true, employee: action.payload };
    case EMPLOYEE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeGetReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_GET_REQUEST:
      return { loading: true };
    case EMPLOYEE_GET_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeGetAllReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_GET_ALL_REQUEST:
      return { loading: true };
    case EMPLOYEE_GET_ALL_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_DELETE_REQUEST:
      return { loading: true };
    case EMPLOYEE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeDeleteByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_DELETE_BY_ID_REQUEST:
      return { loading: true };
    case EMPLOYEE_DELETE_BY_ID_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_DELETE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const employeeAllReducer = (state = { employees: [] }, action) => {
//   switch (action.type) {
//     case EMPLOYEE_ALL_REQUEST:
//       return { loading: true };
//     case EMPLOYEE_ALL_SUCCESS:
//       return { loading: false, employees: action.payload };
//     case EMPLOYEE_ALL_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export const employeeDetailsReducer = (state = { employee: {} }, action) => {
//   switch (action.type) {
//     case EMPLOYEE_DETAILS_REQUEST:
//       return { loading: true };
//     case EMPLOYEE_DETAILS_SUCCESS:
//       return { loading: false, employee: action.payload };
//     case EMPLOYEE_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };