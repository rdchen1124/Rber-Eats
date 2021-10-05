const base_url = 'http://localhost:3004';//在打API前，必須先啟動 json-server
export const addOrder = (data) => {
  return fetch(`${base_url}/orders`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `user=${data.user}`
    +`&order=${JSON.stringify(data.order)}`
    +`&info=${JSON.stringify(data.info)}`
    +`&store=${JSON.stringify(data.store)}`
  }).then(res => res.json());
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
export const getUser = (data) => {
  return fetch(`${base_url}/users?name=${data.name}&password=${data.password}`).then(res => res.json());
}