import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AdminLayout />} />
      <Route path="/laboratorio/verlista" component={<VerLista />} />
      </Routes>
    </Router>
  );
}

export default App;
