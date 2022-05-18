import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Formuario from "../../components/Formulario";
import { obtenerProducto, editarProducto } from "../../redux/actions/product";

// import ProductContext from '../../context/products/productContext';

const EditarPlato = () => {
  let dispatch = useDispatch();

  const { product } = useSelector((state) => state);
  const { producto, editOk } = product;

  const params = useParams();
  const navigate = useNavigate();

  // console.log('el params es: ', params);

  // const { obtenerProducto, producto, editarProducto, editOk } = useContext(ProductContext);

  useEffect(() => {
    dispatch(obtenerProducto(params.editId));
  }, []);

  useEffect(() => {
    if (editOk) {
      navigate("/dashboard");
    }
  }, [editOk]);

  console.log("producto ->", producto);

  const tieneProducto = Object.keys(producto).length;

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="text-primary text-center py-3">Editar Plato</h5>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          {tieneProducto > 0 ? (
            <Formuario
              producto={producto}
              editar={true}
              editarProducto={(producto) => dispatch(editarProducto(producto))}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EditarPlato;
