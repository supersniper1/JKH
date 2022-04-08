import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import './App.sass';
import {ApplicationsPage, FinishedApplicationsPage} from "./pages/export.pages";


export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <header>
            <nav className='headerNav'>
              <ul className="headerRoutes">
                <li>
                  <Link to="/applications" className='headerRoutesItem'>Входящие заявки</Link>
                </li>
                <li>
                  <Link to="/finishedTasks" className='headerRoutesItem'>Выполненные заявки</Link>
                </li>
                <li>
                  <AuthButton />
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <PrivateRoute path="/finishedTasks">
              <FinishedApplicationsPage/>
            </PrivateRoute>
            <PrivateRoute path="/applications">
              <ApplicationsPage/>
            </PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      <a type="button" className="signOutButton" onClick={() => {auth.signout(() => history.push("/"));}}>Выйти</a>
    </p>
  ) : (
    <p>Вы не вошли</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
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
            <a type="button" className="loginButton" onClick={login}>
              Продолжить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}