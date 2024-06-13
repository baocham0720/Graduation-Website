import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

import LayoutClient from './components/LayoutClient';
import Product from './pages/Product/Product';
import LoginPage from './pages/LoginPage/LoginPage';
import Blog from './pages/Blogs/Blog';
import About from './pages/About/About';
import HomePage from './pages/HomePage/HomePage';
import Register from './pages/Register/Register';
import ContactPage from './pages/Contact/ContactPage';
import Page from './pages/PageHome/Pages'; 
import Details from './pages/Details/Details';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutClient />}>
              <Route index element={<HomePage/>} />
              <Route path="product" element={<Product/>} />
              <Route path="details" element={<Details/>} />
              <Route path="pages" element={<Page/>} />
              <Route path="login" element={<LoginPage/>} />
              <Route path="register" element={<Register/>} />
              <Route path="blog" element={<Blog/>} />
              <Route path="about" element={<About/>} />
              <Route path="contact" element={<ContactPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
