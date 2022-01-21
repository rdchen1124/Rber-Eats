import {getUserToken} from './utils';
const base_url = 'http://food-app-api.rdchen.me';// 此為實際的 Rber-Eats-api 官方版本
export const addOrder = (data) => {
  const token = getUserToken();
  return fetch(`${base_url}/order`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
export const getOrders = (limit, page) => {
  const token = getUserToken();
  return fetch(`${base_url}/order?_limit=${limit}&_page=${page}`, {
    method:'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    const headers = res.headers;
    return { res: res.json(), headers }
  });
}
export const addUser = (data) => {
  return fetch(`${base_url}/user`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
export const getUser = (user) => {
  return fetch(`${base_url}/user/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json());
}
export const updateFavorites = ({favorites, userId}) => {
  return fetch(`${base_url}/user/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `favorites=${JSON.stringify(favorites)}`
  }).then(res => res.json());
}
export const getStores = () => {
  return fetch(`${base_url}/store`).then(res => res.json());
}
export const getStore = (id) => {
  return fetch(`${base_url}/store/${id}`).then(res => res.json());
}
export const getMeals =  (store_id) => {
  return fetch(`${base_url}/meal?store_id=${store_id}`).then(res => res.json());
}