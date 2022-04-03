import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ApplicationsPage from "./components/aplications/ApplicationsPage";

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/finishedTasks">Выполненные заявки</Link>
                      </li>
                      <li>
                          <Link to="/applications">Входящие заявки</Link>
                      </li>
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/finishedTasks">
                      <About />
                  </Route>
                  <Route path="/applications">
                      <ApplicationsPage/>
                  </Route>
                  <Route path="/">
                      <ApplicationsPage/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
