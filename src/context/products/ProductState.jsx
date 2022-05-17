import React, { useReducer } from 'react';
import ProductContext from './productContext';
import reducer from './ProductReducer';

import { db } from '../../firebase';

const ProductState = ({ children }) => {

    const intialState = {
        listaProductos: [],
        addOk: false,
        editOk: false,
        deleteOk: false,
        producto: {}
    }

    const agregarProduto = async (producto) => {
        console.log('el producto será: ', producto);
        try {
            await db.collection('productos').add(producto);
            dispatch({
                type: 'AGREGAR_PRODUCTO',
                payload: true
            })
        } catch (error) {
            console.log(error)
        }

    }

    const obtenerProductos = async () => {
        try {
            const productos = [];

            const info = await db.collection('productos').get();
            info.forEach((item) => {
                console.log(item);
                productos.push({
                    id: item.id,
                    ...item.data()
                })
            })
            // console.log('mira la productos');
            // console.log(productos);
            dispatch({
                type: 'LLENAR_PRODUCTOS',
                payload: productos
            })

        } catch (error) {
            console.log(error);
        }
    }

    const obtenerProducto = async (id) => {
        try {
            const info = await db.collection('productos').doc(id).get();
            console.log('la info es', info.data());
            let producto = {
                id: info.id,
                ...info.data()
            }
            dispatch({
                type: 'OBTENER_PRODUCTO',
                payload: producto
            })
        } catch (error) {
            console.log(error);
        }
    }

    const editarProducto = async (producto) => {
        try {
            const productUpdate = { ...producto };
            delete productUpdate.id

            await db.collection('productos').doc(producto.id).update(productUpdate);
            dispatch({
                type: 'EDITAR_PRODUCTO',
                payload: true
            })

        } catch (error) {
            console.log(error);
        }
    }

    const eliminarProducto = async (id) => {
        try {
            await db.collection('productos').doc(id).delete();
            dispatch({
                type: 'ELIMINAR_PRODUCTO',
                payload: true
            })
        } catch (error) {
            console.log(error);
        }
    }


    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <ProductContext.Provider value={{
            listaProductos: state.listaProductos,
            addOk: state.addOk,
            editOk: state.editOk,
            deleteOk: state.deleteOk,
            producto: state.producto,
            agregarProduto,
            obtenerProductos,
            obtenerProducto,
            editarProducto,
            eliminarProducto
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductState;