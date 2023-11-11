import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AgregarPoli from './components/Agregarpoli';
import Verpoli from './components/Verpoli';
import ActualizarPoli from './components/actualizarpoli';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AdminLayout} />
        <Route path="/verpoli" component={Verpoli} />
        <Route path="/agregarpoli" component={AgregarPoli} />
        <Route path="/actualizarpoli" component={ActualizarPoli} />
      </Switch>
    </Router>
  );
}

export default App;