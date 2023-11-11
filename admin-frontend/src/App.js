import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import ActualizarLaboratorio from './components/laboratorio/actualizar';
import AgregarLaboratorio from './components/laboratorio/agregar';
import VerLista from './components/laboratorio/verlista';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <AdminLayout />} />
        <Route path="/laboratorio/verlista" component={VerLista} />
        <Route path="/laboratorio/agregar" component={AgregarLaboratorio} />
        <Route path="/laboratorio/actualizar/:id" component={ActualizarLaboratorio} />
      </Switch>
    </Router>
  );
};

export default App;
