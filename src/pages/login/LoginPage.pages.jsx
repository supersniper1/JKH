import React from "react";
import './loginPage.sass';

export const LoginPage = () => {
  // let history = useHistory();
  // let location = useLocation();
  // let auth = useAuth();

  // let { from } = location.state || { from: { pathname: "/" } };
  // let login = () => {
  //   auth.signin(() => {
  //     history.replace(from);
  //   });
  // };

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
            <a type="button" className="loginButton">
              Продолжить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}