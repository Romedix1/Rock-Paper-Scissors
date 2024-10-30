import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Pages/mainScreen";
import Game from "./Pages/game";
import Layout from "./Pages/layout";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainScreen />} />
        <Route path='/game' element={<Game />} />
      </Route>
    </Routes>
  </BrowserRouter>
);