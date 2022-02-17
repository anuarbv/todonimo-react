import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'components/Layout';
import Login from 'pages/LoginPage';
import TodoPage from 'pages/TodoPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoPage />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
