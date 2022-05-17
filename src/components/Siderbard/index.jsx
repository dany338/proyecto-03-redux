import Logo from '../../assets/images/logo.png';
import { dataNavigation } from '../../data/dataNavigation';
import { Link, NavLink } from 'react-router-dom';
const Siderbard = () => {
  return (
    <div
      className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'
      style={{ width: '280px', height: '100vh' }}
    >
      <Link
        to='/'
        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'
      >
        <div style={{ maxWidth: '9em' }}>
          <img className='img-fluid' src={Logo} alt='logo' />
        </div>
      </Link>
      <hr />
      <ul className='nav nav-pills flex-column mb-auto'>
        {dataNavigation.map(({ id, to, name }) => (
          <li className='nav-item' key={id}>
            <NavLink className='nav-link text-white' to={`/${to}`}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Siderbard;
