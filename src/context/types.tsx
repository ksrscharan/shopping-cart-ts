export type Element = {
  category: string;
  image: string;
  price: string;
  title: string;
};
export type State = {
  cart: CartItem[];
  details: Element;
  products: Element[];
};
export type Docs = {
  title: string;
  category: string;
  price: string;
  image: string;
  id: string;
};
export type CartItem = {
  id: number;
  item: Element;
};
export type ActionType = {
  ADD_TO_CART: string;
  DECREASE_COUNT: string;
  DELETE_CART_ITEM: string;
  RESET_DETAILS: string;
  SET_DETAILS_CATEGORY: string;
  SET_DETAILS_IMAGE: string;
  SET_DETAILS_PRICE: string;
  SET_DETAILS_TITLE: string;
  SET_PRODUCTS: string;
};
export type NumberType = number;

export type Config = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};
