import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ProductPage = lazy(() => import("./Pages/ProductPage/ProductPage"))

const App = () => {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
