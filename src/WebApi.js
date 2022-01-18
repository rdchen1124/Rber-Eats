const base_url = 'http://food-app-api.rdchen.me';// 此為實際的 Rber-Eats-api 官方版本
export const addOrder = (data) => {
  return fetch(`${base_url}/orders`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `user=${data.user}`
    +`&remark=${data.remark}`
    +`&order=${JSON.stringify(data.order)}`
    +`&info=${JSON.stringify(data.info)}`
    +`&store=${JSON.stringify(data.store)}`
  }).then(res => res.json());
}
export const getOrders = (name, limit, page) => {
  return fetch(`${base_url}/orders?user=${name}&_sort=id&_order=desc&_limit=${limit}&_page=${page}`)
    .then(res => {
      const headers = res.headers;
      return { res: res.json(), headers }
    });
}
export const addUser = (data) => {
  return fetch(`${base_url}/users`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:`name=${data.name}`
    +`&password=${data.password}`
    +`&favorites=${JSON.stringify(data.favorites)}`
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
export const checkUserExisted = (name) => {
  return fetch(`${base_url}/users?name=${name}`).then(res => res.json());
}
export const updateFavorites = ({favorites, userId}) => {
  return fetch(`${base_url}/users/${userId}`, {
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