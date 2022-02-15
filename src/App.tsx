import Layout from 'components/Layout';
import Login from 'pages/LoginPage';
import TodoPage from 'pages/TodoPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoPage />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
