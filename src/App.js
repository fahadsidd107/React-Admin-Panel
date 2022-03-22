import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from './pages/userList/UserList';

import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
function App() {
  return (
    <Router className="App">
    
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path="/users" element={<UserList/>} />
        <Route exact path="/user/:userId" element={<User />} />
        <Route exact path="/newUser" element={<NewUser />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
