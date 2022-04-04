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
import './App.css';
import FinishedApplicationsPage from "./pages/finishedApplications/finishedApplicationsPage";
import ApplicationsPage from "./pages/aplications/ApplicationsPage";


export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <header>
            <nav className='headerNav'>
              <ul className="headerRoutes">
                <li>
                  <Link to="/applications" className='headerRoutesItem'>Home</Link>
                </li>
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
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
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
              state: { from: location }
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
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}



// import './App.css';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import ApplicationsPage from "./pages/aplications/ApplicationsPage";
// import FinishedApplicationsPage from "./pages/finishedApplications/finishedApplicationsPage";
//
// function App() {
//   return (
//     <Router>
//       <div>
//         <header>
//           <nav className='headerNav'>
//             <ul className="headerRoutes">
//               <li>
//                 <Link to="/applications" className='headerRoutesItem'>Home</Link>
//               </li>
//               <li>
//                 <Link to="/applications" className='headerRoutesItem'>Входящие заявки</Link>
//               </li>
//               <li>
//                 <Link to="/finishedTasks" className='headerRoutesItem'>Выполненные заявки</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <Switch>
//           <Route path="/finishedTasks">
//             <FinishedApplicationsPage/>
//           </Route>
//           <Route path="/applications">
//             <ApplicationsPage/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
//
// export default App;
