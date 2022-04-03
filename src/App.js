import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ApplicationsPage from "./components/aplications/ApplicationsPage";
import FinishedApplicationsPage from "./components/finishedApplications/finishedApplicationsPage";

function App() {
  return (
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
                      </ul>
                  </nav>
              </header>
              <Switch>
                  <Route path="/finishedTasks">
                      <FinishedApplicationsPage/>
                  </Route>
                  <Route path="/applications">
                      <ApplicationsPage/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
