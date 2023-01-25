import './App.css'
import './styles.scss'
import Contact from './components/register/Contact';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import ColorSchemesExample from './components/ColorSchemesExample';
import Autocarosal from './components/login/Autocarosal';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setLoginuser] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
      <ColorSchemesExample />
        <Routes>
          {/* <Route exact path="/" element={<ColorSchemesExample />} /> */}
          {/* <Route exact path="/" element={<Homepage />} /> */}
          <Route exact path="/" element={<Autocarosal />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
