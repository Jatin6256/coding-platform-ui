import React from "react"
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom'
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import LiveEvents from "./Pages/LiveEvents";
import LoginPage from "./Pages/LoginPage"
import PastEvents from "./Pages/PastEvenst";
import Problems from "./Pages/Problems";
import Rankings from "./Pages/Rankings";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/pastEvents" component={PastEvents} />
          <Route path="/liveEvents" component={LiveEvents} />
          <Route path="/rankings" component={Rankings} />
          <Route path="/problems/:type" component={Problems} />
          <Route component={ErrorPage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
