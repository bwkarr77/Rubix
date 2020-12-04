import {Route, Switch } from "react-router-dom";

import Cube from "./components/Cube.jsx";
import NavBar from './components/NavBar.jsx';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div >
        <Switch>
          <Route exact path={"/"} render={() => (<Cube />)} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
