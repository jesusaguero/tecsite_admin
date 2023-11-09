// admin-frontend/src/App.js

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login'; // crea este componente

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* Otras rutas para el CRUD y otras vistas */}
      </Switch>
    </Router>
  );
}

export default App;
