import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import VerLista from "./components/laboratorio/lverlista";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AdminLayout} />
        <Route path="/polideportivo/lverlista" component={VerLista} />

      </Switch>
    </Router>
  );
}

export default App;
