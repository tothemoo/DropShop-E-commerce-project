import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import HeroPage from "../src/pages/HeroPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
