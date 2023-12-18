import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AgregarHorario from './components/Agregarhorario';
import Agregarlab from './components/Agregarlab';
import AgregarPoli from './components/Agregarpoli';
import Agregaruser from './components/Agregaruser';
import Verpoli from './components/Verpoli';
import EditarHorario from './components/editarhorario';
import Editarlab from './components/editarlab';
import EditarPoli from './components/editarpoli';
import Editaruser from './components/editaruser';
import VerHorario from './components/verhorario';
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
        <Route path="/verhorario" component={VerHorario} />
        <Route path="/editarhorario" component={EditarHorario} />"
        <Route path="/agregarhorario" component={AgregarHorario} />"
      </Switch>
    </Router>
  );
}

export default App;