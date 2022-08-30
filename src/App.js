import './App.css';
import Home from './Components/Home'
import Leaderboard from './Components/Leaderboard'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './Utils/ProtectedRoutes';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path='/leaderboard' element={<Leaderboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
