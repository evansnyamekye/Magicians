/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quote from './components/Quote';
import './assets/App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between -screen min-h-screen max-h-screen">
        <Navbar />
        <main className="container  mx-auto px-10 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
