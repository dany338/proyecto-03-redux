import { firebase } from '../../firebase';

export const iniciarSesion = async (email, password) => {
    return (dispatch) => {
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
    }

};

export const cerrarSesion = async () => {
    return (dispatch) => {
        try {
            await firebase.auth().signOut();
            dispatch(logout());
        } catch (error) {
            console.log(error)
        }
    }

}

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}