import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import ProductContext from '../../context/products/productContext';
import {
  obtenerProductos,
  eliminarProducto,
} from "../../redux/actions/product";

import Table from "../../components/Table";

const Dashboard = () => {
  let dispatch = useDispatch();

  const { product } = useSelector((state) => state);

  const { listaProductos, deleteOk } = product;

  // const { obtenerProductos, eliminarProducto, listaProductos, deleteOk } = useContext(ProductContext);

  useEffect(() => {
    dispatch(obtenerProductos());
  }, []);

  useEffect(() => {
    if (deleteOk) {
      dispatch(obtenerProductos());
    }
  }, [deleteOk]);

  return (
    <>
      <h1>Productos</h1>
      <Table
        listaProductos={listaProductos}
        eliminarProducto={(id) => dispatch(eliminarProducto(id))}
      />
    </>
  );
};

export default Dashboard;
