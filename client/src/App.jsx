// Funcionalidad

// Estilos
import "./App.css";
import NavigationBar from "./components/NavigationBar";
// Componentes
import { Home, LandingPage, Detail, Form } from "./views";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route Component={NavigationBar} />
          <Route exact path="/" Component={LandingPage} />
          <Route path="/home" Component={Home} />
          <Route path="/detail" Component={Detail} />
          <Route path="/create" Component={Form} />
        </Routes>
      </Router>
    </div>
  );
}
