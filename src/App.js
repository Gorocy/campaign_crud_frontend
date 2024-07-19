import './App.css';
import CustomerRouters from './customer/Routers/CustomerRouters';
import { Route, Routes } from 'react-router-dom';
import React /*, { useEffect }*/ from 'react';

function App() {
  //  useEffect(() => {
  //   const token = localStorage.getItem('jwtToken');
  // }, []);


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
