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
import SignUp from "./pages/SignUp";
import SinglePaint from "./pages/SinglePaint";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/discover" element={<Discover />} />                    
            <Route exact path="/home" element={<Home />} />,
            <Route exact path="/random" element={<Random />} />,
            <Route exact path="/contact" element={<Contact />} />,
            <Route exact path="/about" element={<About />} />,
            <Route exact path="/one-paint/:uid" element={<SinglePaint />} />            
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
