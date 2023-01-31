import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import TiendaPage from './pages/TiendaPage';
import CarritoPage from './pages/CarritoPage';
import Proximamente from './pages/Proximamente';

import { ShopContextProvider } from './context/shopcontext';


function App() {
  return (
    <div className="App">
      <Header />
    <ShopContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/tienda" element={<TiendaPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/proximamente" element={<Proximamente />}/>
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
