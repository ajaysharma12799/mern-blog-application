import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle/WriteArticle";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/write-article" element={<WriteArticle />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
