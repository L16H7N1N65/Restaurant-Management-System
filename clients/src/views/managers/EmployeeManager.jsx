import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "../../actions/employeeAction";

import Message from "../../components/messages/Message";
import Loader from "../../components/loaders/Loader";

function EmployeeManager() {
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  const employeeDelete = useSelector((state) => state.employeeDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = employeeDelete;

  const [employeeDetails] = useState({
    first_name: "",
    last_name: "",
    hire_Date: "",
    restaurant_id: "",
  });

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("You want to delete this employee ?")) {
      dispatch(deleteEmployee(id));
    }
  };

  const createHandler = () => {
    dispatch(createEmployee(employeeDetails));
  };

  const updateHandler = (id) => {
    dispatch(updateEmployee(id, employeeDetails));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div className="container mx-auto p-4">
      <button
        onClick={createHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {employees.map((employee) => (
          <div key={employee.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{employee.first_name} {employee.last_name}</h2>
            <p>Employee ID: {employee.id}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => updateHandler(employee.id)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => deleteHandler(employee.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeManager;