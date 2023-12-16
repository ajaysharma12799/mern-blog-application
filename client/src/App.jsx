import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle/WriteArticle";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PrivateRoute/PublicRoute";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/write-article"
            element={
              <PrivateRoute>
                <WriteArticle />
              </PrivateRoute>
            }
          />
          <Route path="/view-article/:id" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
