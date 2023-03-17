import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthProvider";
import PrivateRoutes from "./components/PrivateRoutes";
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
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes/>}>
            <Route path="/random" element={<Random />} />,
            <Route exact path="/home" element={<Home />} />,
            <Route path="/contact" element={<Contact />} />,
            <Route path="/about" element={<About />} />,
            <Route path="/one-paint/:uid" element={<SinglePaint />} />
          </Route>
            <Route path="/rgpd" element={<Rgpd />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
