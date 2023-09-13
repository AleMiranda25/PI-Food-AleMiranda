// Funcionalidad
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
// Estilos
import "./App.css";
// Componentes
import { Home, LandingPage, Detail, Form, About } from "./views";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route
          element={
            <div>
              <NavigationBar />
              <Outlet />
            </div>
          }
        >
          <Route exact path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/detail" Component={Detail} />
          <Route path="/create" Component={Form} />
        </Route>
      </Routes>
    </div>
  );
}
