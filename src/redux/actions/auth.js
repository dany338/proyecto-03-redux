import { firebase } from "../../firebase";

export const validateAuth = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("mira el user", user);
      let autenticado;
      if (user?.uid) {
        autenticado = true;
      } else {
        autenticado = false;
      }

      dispatch({
        type: "UPDATE_IS_AUTH",
        payload: {
          isAuth: autenticado,
          email: user?.email,
          consultando: false,
        },
      });
    });
  };
};

export const iniciarSesion = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch({
        type: "LOGIN",
        payload: { email: user.email, isAuth: true },
      });
    } catch (error) {
      console.log("mira el error", error);
    }
  };
};

export const cerrarSesion = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
  };
};
