import React, {useState} from "react";
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
import {ModalApplication} from "./components/modal.application/ModalApplication";
import {Modal} from "./components/modal/Modal.components";


export default function App() {

  const [modalActive, setModalActive] = useState(true)

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
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalApplication setActive={setModalActive} />
      </Modal>
    </AuthProvider>
  );
}


