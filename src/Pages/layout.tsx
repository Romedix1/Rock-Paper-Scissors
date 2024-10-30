import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
   <main id='main--container' className='flex items-start justify-center'>
      <Outlet />
   </main>
  );
}

export default App;
