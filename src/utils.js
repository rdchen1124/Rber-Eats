const USER = 'user';
const ITEMS = 'items';

export const setAuthUser = (name) => {
  localStorage.setItem(USER, name);
}

export const getAuthUser = () => {
  return localStorage.getItem(USER);
}

export const setItems = (items) => {
  localStorage.setItem(ITEMS, JSON.stringify(items));
}

export const getItems = () => {
  return JSON.parse(localStorage.getItem(ITEMS));
}