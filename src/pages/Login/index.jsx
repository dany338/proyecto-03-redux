import React from 'react';
import Logo from '../../assets/images/logo.png';
import Fondo from '../../assets/images/fondo-mesa.jpg';
import style from '../../styles/login.module.css';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6' style={{ padding: 0 }}>
          <div
            className={`${style.bgImg}`}
            style={{
              backgroundImage: `url(${Fondo})`,
            }}
          >
            <div className='position-absolute top-50 start-50 translate-middle'>
              <img src={Logo} alt='logo' />
            </div>
          </div>
        </div>
        <div className={`col-6`}>
          <div className='position-relative top-50'>
            <div className='position-absolute top-50 start-50 translate-middle'>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
