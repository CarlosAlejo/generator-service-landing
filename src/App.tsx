import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import History from './pages/History';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/historia" element={<History />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacidad" element={<Privacy />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
