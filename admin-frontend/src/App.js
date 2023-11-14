import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Agregarlab from './components/Agregarlab';
import AgregarPoli from './components/Agregarpoli';
import Verpoli from './components/Verpoli';
import EditarPoli from './components/editarpoli';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AdminLayout} />
        <Route path="/verpoli" component={Verpoli} />
        <Route path="/agregarpoli" component={AgregarPoli} />
        <Route path="/editarpoli" component={EditarPoli} />
        <Route path="/agregarlab" component={Agregarlab} />"
        <Route path="/editarlab" component={Editarlab} />"
        <Route path="/verlab" component={Verlab} />"
      </Switch>
    </Router>
  );
}

export default App;