import './App.css';
import CustomerRouters from './customer/Routers/CustomerRouters';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
   useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
