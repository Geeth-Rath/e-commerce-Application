import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../src/Redux/Store/configureStore';
import Sidebar from "./Component/Sidebar/Sidebar";
import Login from "./Component/Login/Login";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Product from "./Component/Product/Product";
import Iteam from "./Component/Iteam/Iteam";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}> {/* Wrap your entire app with Provider */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/sidebar/*"
              element={
                <Layout>
                  <Sidebar />
                </Layout>
              }
            />
            <Route
              path="/product/:childLabel"
              element={
                <Layout>
                  <Product />
                </Layout>
              }
            />
            <Route
              path="/iteam/:id"
              element={
                <Layout>
                  <Iteam />
                </Layout>
              }
            />
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
