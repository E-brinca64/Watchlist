import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Importando as páginas
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Coming from './pages/Coming';
import Today from './pages/Today';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/1" element={<Movie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coming" element={<Coming />} />
          <Route path="/today" element={<Today />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
