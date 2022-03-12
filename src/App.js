import HomePage from './pages/HomePage';
import PilotPage from './pages/PilotPage';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import NewPage from './pages/NewPage';
import LoginPage from './pages/LoginPage';
import FavouritePage from './pages/FavouritePage';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<LoginPage />} />
          <Route path = "/pilot" element={<PilotPage />} />
          <Route path = "/favourites" element={<FavouritePage />} />
          <Route path = "/new" element={<NewPage />} />
          <Route path = "/logout" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
