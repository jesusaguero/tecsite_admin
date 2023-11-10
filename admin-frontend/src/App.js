import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
