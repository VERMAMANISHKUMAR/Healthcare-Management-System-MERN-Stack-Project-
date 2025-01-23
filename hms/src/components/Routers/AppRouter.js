// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routesConfig from './routesConfig';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
