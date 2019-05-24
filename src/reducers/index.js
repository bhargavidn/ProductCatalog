const reducer = (state: {}, action) => {

    switch (action.type) {
        case 'ProductData':
            return { ...state, productData: action.data }
        default:
            return {}
    }
}

export default reducer;