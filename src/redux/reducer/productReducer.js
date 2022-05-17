const intialState = {
    listaProductos: [],
    addOk: false,
    editOk: false,
    deleteOk: false,
    producto: {}
}

export const productReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'AGREGAR_PRODUCTO':
            return {
                ...state,
                addOk: action.payload
            }
        case 'LLENAR_PRODUCTOS':
            return {
                ...state,
                addOk: false,
                editOk: false,
                deleteOk: false,
                listaProductos: action.payload,
                producto: {}
            }
        case 'OBTENER_PRODUCTO':
            return {
                ...state,
                producto: action.payload
            }
        case 'EDITAR_PRODUCTO':
            return {
                ...state,
                editOk: action.payload
            }
        case 'ELIMINAR_PRODUCTO':
            return {
                ...state,
                deleteOk: action.payload
            }
        default:
            return state
    }
}
