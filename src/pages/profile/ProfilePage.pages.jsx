import React from "react";
import { useNavigate  } from "react-router-dom";
import { Header } from "../../components/export.components";
import "./ProfilePage.pages.sass";
import { useAuth } from "../../utils/auth/useAuth";


export const ProfilePage = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const logout = () => {
    signOut(() => navigate('/login', { replace: false }));
  };
  return (
    <div>
      <Header />
      <h2>Profile page</h2>
      <div className="logoutContainer">
        <a type="button" className="logoutButton" onClick={logout}>
          Выход
        </a>
      </div>
    </div>
  );
};
