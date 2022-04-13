import React from "react";
import './App.sass';
import {
  ApplicationsPage,
  FinishedApplicationsPage,
  NotFoundPage,
  LoginPage,
  ProfilePage
} from "./pages/export.pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RequireAuth } from "./utils/auth/requireAuth";
import { AuthProvider } from "./utils/auth/authProvider";


export default function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFoundPage/>}/>
          <Route path="/" element={<Navigate to="/applications"/>}/>
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
          <Route path='/profile' element={
            <RequireAuth>
              <ProfilePage/>
            </RequireAuth>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


