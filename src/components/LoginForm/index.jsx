import { useState } from "react";
import { useDispatch } from "react-redux";
// import AuthContext from '../../context/auth/authContext';

import { iniciarSesion } from "../../redux/actions/auth";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // const { iniciarSesion } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("vamos iniciar sesión con los siguientes datos:", formValues);

    const { email, password } = formValues;

    dispatch(iniciarSesion(email, password));
  };

  return (
    <form className="border border-1 p-5" onSubmit={handleSubmit}>
      <h2 className="p-3 text-center">Hola, Bienvenid@s</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
          value={formValues.password}
        />
      </div>

      <div className="d-grid gap-2 mx-auto">
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
