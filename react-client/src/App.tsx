import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

import LayoutClient from './components/LayoutClient';
// import Register from './pages/Register';
// import LoginPage from './pages/LoginPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutClient />}>
            {/* <Route index element={<HomePage />} />  */}
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
