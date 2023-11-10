import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


function App() {
  let isUserLoggedIn = false;
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
