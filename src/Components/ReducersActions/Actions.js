export const addToCartAction = (product) => {
    return (dispatch) => {
          
        return dispatch({ type: "ADD_TO_CART", product: product });
      
    };
  };
