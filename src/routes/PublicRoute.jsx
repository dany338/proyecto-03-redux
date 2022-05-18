import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

// import AuthContext from '../context/auth/authContext';

const PublicRoute = ({ children }) => {

  const { auth } = useSelector((state) => state);
  const { isAuth, consultando } = auth;

  // const { state: { isAuth, consultando } } = useContext(AuthContext);

  if (consultando) return <h1>Cargando ....</h1>

  return <>{isAuth ? <Navigate to='/dashboard' /> : children}</>;
};

export default PublicRoute;
