import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/register/AuthForm';
import Header from './components/header/header';


function App() {
  return (
    <Router>
      <Header />
      <div className="container p-3">
        <Routes>
          <Route path="/" element={<AuthForm />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
