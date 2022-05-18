import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Formuario from "../../components/Formulario";
import { agregarProduto } from "../../redux/actions/product";

// import ProductContext from '../../context/products/productContext';

const AgregarPlato = () => {
  let dispatch = useDispatch();

  const { product } = useSelector((state) => state);
  const { addOk } = product;

  // const { agregarProduto, addOk } = useContext(ProductContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (addOk) {
      navigate("/dashboard");
    }
  }, [addOk]);

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="text-primary text-center py-3">Agregar Nuevo Plato</h5>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <Formuario
            agregarProduto={(producto) => dispatch(agregarProduto(producto))}
          />
        </div>
      </div>
    </div>
  );
};

export default AgregarPlato;
