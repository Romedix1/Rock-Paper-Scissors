import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Pages/mainScreen";
import Classic from "./Pages/classic";
import Layout from "./Pages/layout";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainScreen />} />
        <Route path='/classic' element={<Classic />} />
      </Route>
    </Routes>
  </BrowserRouter>
);