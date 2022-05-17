import React, { useEffect, useState } from 'react';
import Error from './Error';

const initialState = {
  nombre: '',
  precio: '',
  categoria: '',
  descripcion: '',
};

const errorInit = {
  ...initialState
}

const categorias = ['Bebidas', 'Cortes', 'Entradas', 'Postres'];

const Formuario = ({ agregarProduto, producto, editar = false, editarProducto }) => {

  const [dataForm, setDataForm] = useState(initialState);
  const [errors, setErrors] = useState(errorInit);

  useEffect(() => {
    if (editar) {
      console.log('mira el producto', producto)
      setDataForm({ ...producto })
    }
  }, []);


  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }

  const isValid = () => {
    let respuesta = true;
    const localErrors = { ...errorInit };
    for (let key in dataForm) {
      if (key !== 'id') {
        if (dataForm[key].trim() === '' || dataForm[key].length === 0) {
          localErrors[key] = 'Campo Requerido';
          respuesta = false
        }
      }

    }
    setErrors(localErrors);

    return respuesta
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      if (editar) {
        console.log('vamos a editar');
        editarProducto(dataForm);
      } else {
        agregarProduto(dataForm);
      }
    }
  }

  return (
    <form className='row g-3' onSubmit={handleSubmit}>
      <div className='col-md-6'>
        <label htmlFor='dish' className='form-label'>
          Nombre del plato
        </label>
        <input type='text' className='form-control' name='nombre' onChange={handleChange} value={dataForm.nombre} />
        <Error text={errors.nombre} />
      </div>
      <div className='col-md-6'>
        <label htmlFor='price' className='form-label'>
          precio
        </label>
        <input type='number' className='form-control' name='precio' onChange={handleChange} value={dataForm.precio} />
        <Error text={errors.precio} />
      </div>
      <div className='col-6'>
        <label htmlFor='inputAddress' className='form-label'>
          Categoría
        </label>
        <select className='form-select' name='categoria' onChange={handleChange} value={dataForm.categoria}>
          <option disabled value=''>
            Selecciona una Categoría
          </option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <Error text={errors.categoria} />
      </div>
      <div className='col-md-6'>
        <label htmlFor='exampleFormControlTextarea1' className='form-label'>
          Descripción
        </label>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
          name='descripcion'
          onChange={handleChange} value={dataForm.descripcion}
        ></textarea>
        <Error text={errors.descripcion} />
      </div>
      <div className='col-6'>
        <button type='submit' className='btn btn-primary'>
          {editar ? 'Editar Plato' : 'Crear Plato'}
        </button>
      </div>
    </form>
  );
};

export default Formuario;
