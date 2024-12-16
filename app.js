import React, { useState } from 'react';
import './app.css'
import RegisterForm from './registrationForm';
import EmployeeList from './employee';

function App() {
  const [userRegistered, setUserRegistered] = useState(false);

  const handleUserRegistered = (userData) => {
    console.log('User Registered:', userData);
    setUserRegistered(true);
  };

  return (
    <div className="container">
      {!userRegistered && <RegisterForm onUserRegistered={handleUserRegistered} />}
      {userRegistered && <EmployeeList />}
    </div>
  );
}

export default App;
