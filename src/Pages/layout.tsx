import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <main id='main--container'>
      <Outlet />
   </main>
  );
}

export default App;
