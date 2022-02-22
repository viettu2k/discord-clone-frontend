import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./authPage/LoginPage/LoginPage";
import RegisterPage from "./authPage/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
