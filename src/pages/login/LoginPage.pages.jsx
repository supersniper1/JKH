import React from "react";
import "./loginPage.sass";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/auth/useAuth";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const user = "den";

  const handleLogin = () => {
    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className="loginContainer">
      <div className="loginBlock">
        <h5 className="joinText">Вход</h5>
        <div className="loginContent">
          <h5 className="loginText">Имя:</h5>
          <input type="name" className="loginInput" />
          <h5 className="loginText">Пароль:</h5>
          <input type="password" className="loginInput" />
          <div>
            <a type="button" className="loginButton" onClick={handleLogin}>
              Продолжить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};