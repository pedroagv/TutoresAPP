import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/Inicio/Home';
import Cabecera from './components/Cabecera/Cabecera';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios';
import Pata from './components/Inicio/Pata';
import LoginForm from './components/RegistroUsuarios/LoginForm';
import ResultadosTutores from './components/BusquedaTutores/ResultadosTutores';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);    
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <Cabecera user={user} onLogout={handleLogout} />
      <div className="container p-3">
        <Routes>
          {/* <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/iniciar-sesion" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/registro-de-usuarios" element={<RegistroUsuarios />} />
          <Route path="/iniciar-sesion" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/resultados-tutores" element={<ResultadosTutores />} />

          {/* <Route path="/iniciar-sesion" element={<LoginForm />} /> */}

        </Routes>
      </div>
      <Pata />
    </Router>
  );
}

export default App;
