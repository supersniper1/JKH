import React, { useContext, createContext, useState } from "react";
import './App.sass';
import {ApplicationsPage, FinishedApplicationsPage, LoginPage} from "./pages/export.pages";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route path='applications' element={<ApplicationsPage />} />
            <Route path='finished-applications' element={<FinishedApplicationsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


