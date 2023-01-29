import { CART_ADD_ITEM, CART_FAIL_ITEM, CART_REMOVE_ITEM } from "../contants"

export const cartReducers = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return { loading: false, cartItems: action.payload }
        case CART_REMOVE_ITEM:
            return { loading: false, cartItems: action.payload }
        case CART_FAIL_ITEM:
            return { loading: false, cartItems: action.payload }
        default:
            return state
    }
}