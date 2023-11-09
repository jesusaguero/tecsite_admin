import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
