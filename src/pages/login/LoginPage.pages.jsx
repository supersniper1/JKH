import React, {useState} from "react";
import "./loginPage.sass";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/auth/useAuth";
import loginRequest from "../../api/post.api";

export const LoginPage = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [incorrectPassword, setIncorrectPassword] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";


  const handleLogin = (user) => {
    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className="loginContainer">
      <div className="loginBlock">
        <h5 className="joinText">Вход</h5>
        <form className="loginContent" onSubmit={(e) => {
          e.preventDefault()
          loginRequest({
            'login': login,
            'password': password
          },
            handleLogin,
            setIncorrectPassword(true)
            )

          setPassword('')
          setLogin('')
        }}>
          <h5 className="loginText">Имя:</h5>
          <input type="name" className="loginInput" value={login} onChange={event => setLogin(event.target.value)}/>
          <h5 className="loginText">Пароль:</h5>
          <input type="password" className="loginInput" value={password} onChange={event => setPassword(event.target.value)} />
          <p className={incorrectPassword ? 'incorrectPassword display' : 'incorrectPassword hidden'}>Неправильно введен логин или пароль</p>
          <button className="loginButton" >Продолжить</button>
        </form>
      </div>
    </div>
  );
};