import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthProvider";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Random from "./pages/Random";
import Rgpd from "./pages/Rgpd";
import SignUp from "./pages/SignUp";
import SinglePaint from "./pages/SinglePaint";
import Welcome from "./pages/Welcome";

function App() { 

  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/random" element={<Random />} />,
            <Route path="/home" element={<Home />} />,
            <Route path="/contact" element={<Contact />} />,
            <Route path="/about" element={<About />} />,
            <Route path="/one-paint/:uid" element={<SinglePaint />} />
            <Route path="/privacy" element={<Rgpd />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
