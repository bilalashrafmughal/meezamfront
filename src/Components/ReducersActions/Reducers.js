export const init = (state={}, action)=>{
    if(action.type === 'INIT_APP'){
        return action.initData
    }else{
        return state
    }
}

export const addToCartReducer = (state= [], action)=>{
    console.log('reducer state', state)
    console.log('reducer action.state', action.product)
    if(action.type === "ADD_TO_CART"){
        return [...state, action.product]
    }else{
        return state
    }

}