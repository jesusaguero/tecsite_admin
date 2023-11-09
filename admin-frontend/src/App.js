import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
