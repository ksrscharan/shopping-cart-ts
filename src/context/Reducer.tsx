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
    case ACTION.RESET_DETAILS:
      return {
        ...state,
        details: { title: "", category: "", price: "", image: "" },
      };

    case ACTION.SET_DETAILS_CATEGORY:
      return {
        ...state,
        details: { ...state.details, category: action.payload },
      };

    case ACTION.SET_DETAILS_TITLE:
      return {
        ...state,
        details: { ...state.details, title: action.payload },
      };

    case ACTION.SET_DETAILS_PRICE:
      return {
        ...state,
        details: { ...state.details, price: action.payload },
      };
    case ACTION.SET_DETAILS_IMAGE:
      return {
        ...state,
        details: { ...state.details, image: action.payload },
      };

    case ACTION.SET_RES:

      return {
        ...state,
        res: [...state.res, action.payload],
      };

    default:
      return state;
  }
}
