const initialState = {
  product: [],
  basket: [],
  fovarite: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_TO_BASKET":
      const fountBasket = state.basket.find(
        (el) => el.id === action.payload.id
      );
      if (fountBasket) {
        return {
          ...state,
          basket: state.basket.map((el) => {
            return el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el;
          }),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, quantity: 1 }],
      };
    case "DELETE_CART":
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.payload.id),
      };
    case "ADD_TO_FAVORITE": {
      return {
        ...state,
        fovarite: [...state.fovarite, { ...action.payload, liked: true }],
      };
    }
    case "DELETE_FROM_FAVORITE": {
      return {...state, fovarite: state.fovarite.filter(el => el.id !== action.payload.id)}
    }
    case "DECREMENT_QUANTITY": {
      const res = state.basket.find((el) => el.id === action.payload.id);
      if (res.quantity > 1) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity - 1 }
              : el
          ),
        };
      }
    }
    default:
      return state;
  }
};
