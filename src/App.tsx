import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MembershipDetails from './pages/MembershipDetails';
import TrainerDetails from './pages/TrainerDetails';
import ClassDetails from './pages/ClassDetails';
import MembershipsPage from './pages/MembershipsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership/:id" element={<MembershipDetails />} />
        <Route path="/trainer/:id" element={<TrainerDetails />} />
        <Route path="/class/:id" element={<ClassDetails />} />
        <Route path="/memberships" element={<MembershipsPage />} />
      </Routes>
    </Router>
  );
}
