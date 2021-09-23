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