import './App.css'
import './styles.scss'
import Contact from './components/register/Contact';
import Contactlist from './components/register/Contactlist';
import Contactdatatble from './components/register/Contactdatatble';
import Formikform from './components/register/Formikform';
import SentEmail from './components/register/SentEmail';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import ColorSchemesExample from './components/ColorSchemesExample';
import Autocarosal from './components/login/Autocarosal';
import About from './components/About';
import Footer from './components/Footer';
import Pagenotfound from './components/Pagenotfound';
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
          {/* <Route path="/contactlist" element={<Contactlist />} /> */}
          <Route path="/contactlist" element={<Contactdatatble />} />
          <Route path="/formdata" element={<Formikform />} />
          <Route path="/sendmail" element={<SentEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>

      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
