import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home'
import DetailHotel from './containers/DetailHotel'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/details/:id" component={DetailHotel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
