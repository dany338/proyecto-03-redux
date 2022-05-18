import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Siderbard from "../components/Siderbard";
import { cerrarSesion } from "../redux/actions/auth";

import { useApiMenu } from "../hooks/useApiMenu";

// import AuthContext from '../context/auth/authContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useSelector((state) => state);
  const { isAuth, consultando, email } = auth;
  const dispatch = useDispatch();

  const { routeList } = useApiMenu("rutas1");

  console.log('mira el valor de routList ', routeList);

  // const { state: { isAuth, consultando, email }, cerrarSesion } = useContext(AuthContext);

  if (consultando || !routeList) return <h1>Cargando ....</h1>;

  return (
    <>
      <section className="d-flex">
        {routeList && <Siderbard routList={routeList} />}

        <div style={{ width: "100%" }}>
          <Header email={email} cerrar={dispatch(cerrarSesion)} />
          <main className="container">
            {isAuth ? children : <Navigate to="/" />}
          </main>
        </div>
      </section>
    </>
  );
};

export default PrivateRoute;
