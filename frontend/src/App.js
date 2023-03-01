import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Router implementation for more pages
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm']}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
