import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Loader from "./pages/Loader/Loader";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Winter = lazy(() => import("./pages/Winter/Winter"));
const Spring = lazy(() => import("./pages/Spring/Spring"));
const Summer = lazy(() => import("./pages/Summer/Summer"));
const Autumn = lazy(() => import("./pages/Autumn/Autumn"));
const ErrorPage = lazy(() => import("./pages/Error/ErrorPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
