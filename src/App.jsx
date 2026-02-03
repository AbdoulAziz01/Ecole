import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import ElevesPage from './pages/ElevesPage';
import ClassesPage from './pages/ClassesPage';
import EnseignantsPage from './pages/EnseignantsPage';
import NotesPage from './pages/NotesPage';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="eleves" element={<ElevesPage />} />
          <Route path="classes" element={<ClassesPage />} />
          <Route path="enseignants" element={<EnseignantsPage />} />
          <Route path="notes" element={<NotesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
