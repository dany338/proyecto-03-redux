import React from 'react';
import RowTable from '../RowTable';

const Table = ({ listaProductos, eliminarProducto }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Nombre</th>
          <th scope='col'>Categoria</th>
          <th scope='col'>Precio</th>
          <th className='text-center' scope='col'>
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {listaProductos.map((producto, index) => <RowTable key={producto.id} info={producto} indice={index} elimnar={() => eliminarProducto(producto.id)} />)}

      </tbody>
    </table>
  );
};

export default Table;
