import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Register from "./login/register";
import Layout from "./layout";
import Home from "./login/home";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
