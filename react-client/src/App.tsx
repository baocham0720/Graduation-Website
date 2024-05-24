
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

import LayoutClient from './components/LayoutClient';
import Product from './pages/Product/Product';
import LoginPage from './pages/LoginPage/LoginPage';
import Blog from './pages/Blogs/Blog';
import About from './pages/About/About';
import HomePage from './pages/HomePage/HomePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutClient />}></Route>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
