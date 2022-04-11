import React from "react";
import './App.sass';
import { ApplicationsPage, FinishedApplicationsPage, LoginPage } from "./pages/export.pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { RequireAuth } from "./utils/auth/requireAuth";
import { AuthProvider } from "./utils/auth/authProvider";


export default function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/applications' element={
            <RequireAuth>
              <ApplicationsPage />
            </RequireAuth>
          } />
          <Route path='/finished-applications' element={
            <RequireAuth>
              <FinishedApplicationsPage />
            </RequireAuth>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


