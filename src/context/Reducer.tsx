import { ACTION } from "./Actions";
import { CartItem } from "./types";

export default function reducer(
  state: any,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case ACTION.ADD_DATA:
      return { ...state, data: action.payload };
    case ACTION.ADD_TO_CART:
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

    case ACTION.DECREASE_COUNT:
      return {
        ...state,
        cart: state.cart.filter(
          (e: CartItem, i: number) =>
            i !==
            state.cart.findIndex(
              (f: CartItem) => f.item.title === action.payload
            )
        ),
      };
    default:
      return state;
  }
}
