import {Route, Switch } from "react-router-dom";

import Cube from "./components/Cube.jsx";
import NavBar from './components/NavBar.jsx';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      <div >
        <Switch>
          <Route exact path={"/Cube"} render={() => (<Cube />)} />
        </Switch>
      </div>
      </header>
    </div>
  );
}

export default App;
