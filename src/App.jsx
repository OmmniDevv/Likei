import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage/Homepage";
import Winter from "./pages/Winter/Winter";
import Spring from "./pages/Spring/Spring";
import Summer from "./pages/Summer/Summer";
import Autumn from "./pages/Autumn/Autumn";
import ErrorPage from "./pages/Error/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/winter" element={<Winter />} />
          <Route path="/spring" element={<Spring />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/autumn" element={<Autumn />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
