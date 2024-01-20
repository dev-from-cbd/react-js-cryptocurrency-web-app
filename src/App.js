//import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">Main - React JS Cryptocurrency Web App</div>
      <div className="footer">Footer - React JS Cryptocurrency Web App</div>
    </div>
  );
};

export default App;
