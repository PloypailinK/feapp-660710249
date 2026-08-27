import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetail from './pages/MovieDetail';



function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>                {/* ← เฉพาะตรงนี้ที่สลับตาม URL */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </main>
      <Footer />              
    </div>
  );
}

export default App;