import React, { useEffect, useReducer } from 'react';
import AuthContext from './authContext';
import reducer from './authReducer';

import { firebase } from '../../firebase';

const AuthState = ({ children }) => {
  const initialState = {
    isAuth: false,
    email: null,
    consultando: true
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('mira el user', user);
      let autenticado;
      if (user?.uid) {
        autenticado = true;
      } else {
        autenticado = false
      }

      dispatch({
        type: 'UPDATE_IS_AUTH',
        payload: {
          isAuth: autenticado,
          email: user?.email,
          consultando: false
        }
      })

    });
  }, []);

  const iniciarSesion = async (email, password) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch({
        type: 'LOGIN',
        payload: { email: user.email, isAuth: true },
      });
    } catch (error) {
      console.log('mira el error', error);
    }
  };

  const cerrarSesion = async () => {
    try {
      await firebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    return {
      type: 'LOGOUT'
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
