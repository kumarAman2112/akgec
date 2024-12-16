import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-item">
          <span>{employee.name}</span>
          <span>{employee.email}</span>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
