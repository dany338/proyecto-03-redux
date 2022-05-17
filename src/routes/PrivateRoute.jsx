import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Siderbard from '../components/Siderbard';

import AuthContext from '../context/auth/authContext';

const PrivateRoute = ({ children }) => {


  const { state: { isAuth, consultando, email }, cerrarSesion } = useContext(AuthContext);
  // console.log('mira al state', state);

  if (consultando) return <h1>Cargando ....</h1>

  return (
    <>
      <section className='d-flex'>
        <Siderbard />
        <div style={{ width: '100%' }}>
          <Header email={email} cerrar={cerrarSesion} />
          <main className='container'>
            {isAuth ? children : <Navigate to='/' />}
          </main>
        </div>
      </section>
    </>
  );
};

export default PrivateRoute;
