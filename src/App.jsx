import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Balle from "./pages/Ball";
import TermCondition from "./pages/TermCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* <Route path="/ball" element={<Balle />} /> */}
      </Routes>
    </div>
  );
};

export default App;
