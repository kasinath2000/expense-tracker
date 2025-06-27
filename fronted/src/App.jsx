import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

import SidebarLayout from './components/SidebarLayout';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <SidebarLayout>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/income"
          element={
            <PrivateRoute>
              <IncomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/expense"
          element={
            <PrivateRoute>
              <ExpensePage />
            </PrivateRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </SidebarLayout>
  );
};

export default App;
