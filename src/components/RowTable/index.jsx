import React from 'react';
import { Link } from 'react-router-dom';

const RowTable = ({ info, indice, elimnar }) => {
  const { id, nombre, precio, categoria } = info
  return (
    <tr>
      <th scope='row'>{indice + 1}</th>
      <td>{nombre}</td>
      <td>{categoria}</td>
      <td>S/ {precio}</td>
      <td className='d-flex justify-content-around'>
        <Link className='btn btn-warning' to={`/editar-plato/${id}`}>
          Editar
        </Link>
        <button className='btn btn-primary'>Ver detalle</button>
        <button className='btn btn-danger' onClick={elimnar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default RowTable;
