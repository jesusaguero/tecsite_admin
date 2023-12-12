import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Agregarlab from './components/Agregarlab';
import AgregarPoli from './components/Agregarpoli';
import Agregaruser from './components/Agregaruser';
import Verpoli from './components/Verpoli';
import Editarlab from './components/editarlab';
import EditarPoli from './components/editarpoli';
import Editaruser from './components/editaruser';
import Verlab from './components/verlab';
import VerReservaLab from './components/verreservalab';
import VerReservaPoli from './components/verreservapoli';
import Veruser from './components/veruser';


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
        <Route path="/verlab" component={Verlab} />
        <Route path="/agregaruser" component={Agregaruser} />"
        <Route path="/editaruser" component={Editaruser} />"
        <Route path="/veruser" component={Veruser} />
        <Route path="/verreservapoli" component={VerReservaPoli} />
        <Route path="/verreservalab" component={VerReservaLab} />
      </Switch>
    </Router>
  );
}

export default App;