import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CategoryRestaurant from "./views/category/categoryRestaurant";
import CategoryEmployee from "./views/category/categoryEmployee";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/restaurants" component={categoryRestaurant} />
        <Route path="/employees" component={categoryEmployee} />
      </div>
    </Router>
  );
}

export default App;

// import categoryRestaurant from "./views/category/categoryRestaurant";
// import categoryEmployee from "./views/category/categoryEmployee";
// import { setRestaurants, addRestaurant, setEmployees, addEmployee } from './actions'; 

// function App() {
//   const dispatch = useDispatch();
//   const restaurants = useSelector(state => state.restaurants);
//   const employees = useSelector(state => state.employees);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       const result = await axios("http://restaurants:5002/api/restaurant");
//       dispatch(setRestaurants(result.data));
//     };

//     const fetchEmployees = async () => {
//       const result = await axios("http://employees:5002/api/employee");
//       dispatch(setEmployees(result.data));
//     };

//     fetchRestaurants();
//     fetchEmployees();
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <AddRestaurant onAdd={restaurant => dispatch(addRestaurant(restaurant))} />
//       <RestaurantList restaurants={restaurants} />
//       <EmployeeList onAdd={employee => dispatch(addEmployee(employee))} employees={employees} />
//     </div>
//   );
// }

// export default App;
