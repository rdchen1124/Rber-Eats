const USER = 'user';
const CART = 'cart';

export const setAuthUser = (name) => {
  localStorage.setItem(USER, name);
}

export const getAuthUser = () => {
  return localStorage.getItem(USER);
}

export const setCart = (cart) => {
  localStorage.setItem(CART, JSON.stringify(cart));
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem(CART));
}