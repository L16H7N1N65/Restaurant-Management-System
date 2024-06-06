import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import restaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
  employees: employeeReducer,
  restaurants: restaurantReducer
});

export default rootReducer;