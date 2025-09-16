import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Grants from './pages/Grants';
import Media from './pages/Media';



// Placeholder components for routes not yet implemented
import FundedProjects from './pages/FundedProjects';
import Resources from './pages/Resources';


function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/grants" element={<Grants />} />
            <Route path="/funded-projects" element={<FundedProjects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/media" element={<Media />} />
            
            
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;