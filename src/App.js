import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import Profil from "./pages/profil";

import './App.css';
import { useState } from "react";
import { hasAuthenticated, HasRoles, HasId } from "./services/AuthApi";
import Auth from './contexts/Auth';
import Register from "./pages/register";
import Login from './pages/login';
import LogOut from "./components/account/logOut";
import NotFound from "./pages/pageNotFound";
import Livres from "./pages/Livres";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated()) ;
  const [hasRoles , setHasRoles] = useState(HasRoles()) ;
  const [hasId , setHasId] = useState(HasId()) ;

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated, hasRoles, setHasRoles, hasId, setHasId }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/Books" element={<Livres />} />
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </Router>
    </Auth.Provider>
  );
}

export default App;
