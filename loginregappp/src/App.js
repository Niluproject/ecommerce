import './App.css'
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setLoginuser] = useState({})
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route path="/"><Homepage /></Route>
          <Route path="/"><Login /></Route>
          <Route path="/"><Register /></Route>
        </Switch>
      </Router> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      {/* <Homepage />
      <Login />
      <Register /> */}

    </div>
  );
}

export default App;
