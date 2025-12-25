import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { page } from './imports/page';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<page.Landing />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App