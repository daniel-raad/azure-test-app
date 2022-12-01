// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavbarExternal from './Components/NavbarExternal';
import ForYou from './Pages/ClientApp/ForYou';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <NavbarExternal />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/live-event">
            <LiveEvent />
          </Route> */}
            <Route path="/">
              <ForYou />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
