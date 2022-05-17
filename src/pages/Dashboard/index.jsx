import { useContext, useEffect } from 'react';
import ProductContext from '../../context/products/productContext';

import Table from '../../components/Table';

const Dashboard = () => {

  const { obtenerProductos, eliminarProducto, listaProductos, deleteOk } = useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  useEffect(() => {
    if (deleteOk) {
      obtenerProductos();
    }

  }, [deleteOk]);

  return (
    <>
      <h1>Productos</h1>
      <Table listaProductos={listaProductos} eliminarProducto={eliminarProducto} />
    </>
  );
};

export default Dashboard;
