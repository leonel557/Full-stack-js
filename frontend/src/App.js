import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Router implementation for more pages
import Home from "./pages/Home";
// Implment Layout for all pages
import Layout from "./components/Layout";

const App = () => {
  return (
    <ThemeProvider breakpoints={["xxl", "xl", "lg", "md", "sm"]}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
