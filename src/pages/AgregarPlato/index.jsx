import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Formuario from '../../components/Formulario';

import ProductContext from '../../context/products/productContext';

const AgregarPlato = () => {

  const { agregarProduto, addOk } = useContext(ProductContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (addOk) {
      navigate('/dashboard');
    }

  }, [addOk]);

  return (
    <div className='row'>
      <div className='col-12'>
        <h5 className='text-primary text-center py-3'>Agregar Nuevo Plato</h5>
        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
          <Formuario agregarProduto={agregarProduto} />
        </div>
      </div>
    </div>
  );
};

export default AgregarPlato;
