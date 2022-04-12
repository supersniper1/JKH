import React from "react";
import { Header } from "../../components/export.components";
import "./ProfilePage.pages.sass";

export const ProfilePage = () => {
  return (
    <div>
      <Header />
      <h2>Profile page</h2>
      <div className="logoutContainer">
        <a type="button" className="logoutButton">
          Выход
        </a>
      </div>
    </div>
  );
};
