import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Loigin from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AgregarPlato from '../pages/AgregarPlato';
import EditarPlato from '../pages/EditarPlato';
import ListaUsuarios from '../pages/ListaUsuarios';

export const listRoute = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <Loigin />
      </PublicRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/agregar-plato',
    element: (
      <PrivateRoute>
        <AgregarPlato />
      </PrivateRoute>
    ),
  },
  {
    path: '/editar-plato/:editId',
    element: (
      <PrivateRoute>
        <EditarPlato />
      </PrivateRoute>
    ),
  },
  {
    path: '/ListaUsuarios',
    element: (
      <PrivateRoute>
        <ListaUsuarios />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: (
      <div>
        <p>No se encontró la página consultada</p>
      </div>
    ),
  },
];
