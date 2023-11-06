import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Auth from '../../contexts/Auth';


const LogOut = () => {
  const navigate = useNavigate();
  localStorage.clear() ;
  const { setIsAuthenticated } = useContext(Auth) ;

  useEffect(()=>{
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    })
    setIsAuthenticated(false) ;
    navigate('/home');

  })
  return (
    <>
    </>
  )
}

export default LogOut