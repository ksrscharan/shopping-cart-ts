import { ACTION } from "./Actions";
import { CartItem } from "./types";

export default function reducer(
  state: any,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case ACTION.ADD_DATA:
      console.log(action.payload);
      return { ...state, data: action.payload };
    case ACTION.ADD_TO_CART:
      console.log(state.cart);
      return { ...state, cart: [...state.cart, action.payload] };
    case ACTION.DELETE_CART_ITEM:
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (cartItem: CartItem) => cartItem.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
}
