import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

import './App.css';
import ForgetMailPage from './components/forgetPage';
import Welcome from './components/Welcome';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import WWOhomepage from "./components/WWOhomepage";
import FulltimeJobs from "./components/fulltimeJobs";
import SavedJobs from "./components/SavedJobs";
import { AuthProvider } from "./AuthContext";
import Account from "./components/Account";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/home" element={<WWOhomepage/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/forgot" element={<ForgetMailPage />} />
            <Route exact path="/full-time-jobs" element={<FulltimeJobs />} />
            <Route exact path="/saved-jobs" element={<SavedJobs/>} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;