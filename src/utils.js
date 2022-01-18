const USER = 'user';
const CART = 'cart';
const TOKEN = 'token';

export const setAuthUser = (user) => {
  localStorage.setItem(USER, JSON.stringify(user));
}

export const getAuthUser = () => {
  return JSON.parse(localStorage.getItem(USER));
}

export const setUserToken = (token) => {
  localStorage.setItem(TOKEN, token);
}

export const getUserToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN));
}

export const setCart = (cart) => {
  localStorage.setItem(CART, JSON.stringify(cart));
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem(CART));
}

export const countingItems = (item) => {
  const numOfCartItems = {};
  for (let i = 0; i < item.length; i++) {
    if(numOfCartItems[item[i].mealId] === undefined){
      numOfCartItems[item[i].mealId] = item[i].amount;
    }else{
      numOfCartItems[item[i].mealId] += item[i].amount;
    }
  }
  return numOfCartItems;
}