import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* Components */
import Message from "../../components/message";
import Loader from "../../components/loader";
import HeaderContent from "../../components/headerContent";
import Input from "../../components/form/input";
import ButtonGoBack from "../../components/buttonGoBack";

/* Constants */
import {
    CATEGORY_UPDATE_RESET,
    CATEGORY_DETAILS_RESET,
    CATEGORY_DELETE_RESET,
} from "../../constants/categoryConstant";

/* Actions */
import {
    updateCategory,
    listCategoryDetails,
} from "../../actions/categoryAction";
import LoaderHandler from "../../components/loader/loaderHandler";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://127.0.0.1:5002/restaurants/employees')
    .then(response => {
      setEmployees(response.data);
    })      
    .catch(error => {
      setError("Loading error @EmployeeList.js");
    });
  }, []); 

  const handleDelete = (id) => {
    if (window.confirm("You want to delete this employee ?")) {
      axios.delete(`http://127.0.0.1:5002/restaurants/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter(employee => employee.id !== id));
      })
      .catch(error => {
        setError("Error while deleting employee");
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
      {employees.map((employee) => (
        <li key={employee.id} className="my-2 flex justify-between items-center">
          {employee.first_name} - {employee.last_name} - {employee.hire_date} - {employee.restaurant_id}
          <button onClick={() => handleDelete(employee.id)} className="bg-red-500 text-white px-2 py-1 rounded ml-4">
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default EmployeeList;