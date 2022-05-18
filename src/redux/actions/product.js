import { db } from "../../firebase";

export const agregarProduto = (producto) => {
  return async (dispatch) => {
    console.log("el producto será: ", producto);
    try {
      await db.collection("productos").add(producto);
      dispatch({
        type: "AGREGAR_PRODUCTO",
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtenerProductos = () => {
  return async (dispatch) => {
    try {
      const productos = [];

      const info = await db.collection("productos").get();
      info.forEach((item) => {
        console.log(item);
        productos.push({
          id: item.id,
          ...item.data(),
        });
      });
      // console.log('mira la productos');
      // console.log(productos);
      dispatch({
        type: "LLENAR_PRODUCTOS",
        payload: productos,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtenerProducto = (id) => {
  return async (dispatch) => {
    try {
      const info = await db.collection("productos").doc(id).get();
      console.log("la info es", info.data());
      let producto = {
        id: info.id,
        ...info.data(),
      };
      dispatch({
        type: "OBTENER_PRODUCTO",
        payload: producto,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editarProducto = (producto) => {
  return async (dispatch) => {
    try {
      const productUpdate = { ...producto };
      delete productUpdate.id;

      await db.collection("productos").doc(producto.id).update(productUpdate);
      dispatch({
        type: "EDITAR_PRODUCTO",
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarProducto = (id) => {
  return async (dispatch) => {
    try {
      await db.collection("productos").doc(id).delete();
      dispatch({
        type: "ELIMINAR_PRODUCTO",
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
