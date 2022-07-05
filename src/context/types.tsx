export type Element = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
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
  DELETE_CART_ITEM: string;
};
export type NumberType = number;
