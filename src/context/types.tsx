export type Element = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: string;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export type CartItem = {
  id: number;
  item: Element;
};
export type ActionType = {
  ADD_DATA: string;
  ADD_TO_CART: string;
  DECREASE_COUNT: string;
  DELETE_CART_ITEM: string;
  RESET_DETAILS: string;
  SET_DETAILS_CATEGORY: string;
  SET_DETAILS_IMAGE: any;
  SET_DETAILS_PRICE: any;
  SET_DETAILS_TITLE: string;
  SET_RES: string;
};
export type NumberType = number;

export type Config = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}