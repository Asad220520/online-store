export const getProduct = (data) => {
  return { type: "GET_PRODUCT", payload: data };
};
export const addToBasket = (el) => {
  return { type: "ADD_TO_BASKET", payload: el };
};
export const deleteCart = (el) => {
  return { type: "DELETE_CART", payload: el };
};
export const addToQuantity = (el) => {
  return { type: "DECREMENT_QUANTITY", payload: el };
};
export const addToFavorite = (el) => {
  return { type: "ADD_TO_FAVORITE", payload: el };
};
export const deleteFromFavorite = (el) => {
  return { type: "DELETE_FROM_FAVORITE", payload: el };
};
