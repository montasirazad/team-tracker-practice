import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from "./Components/NoMatch/NoMatch";
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/team-detail:idTeam">
            <TeamDetails />
          </Route>

          <Route exact path="*">
            <NoMatch />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
