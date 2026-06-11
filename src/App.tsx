import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingBookButton } from './components/FloatingBookButton';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Properties from './pages/Properties';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-0 flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <FloatingBookButton />
    </div>
  );
}


