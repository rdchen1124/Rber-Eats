const base_url = 'http://localhost:3004';//在打API前，必須先啟動 json-server
export const addOrder = (data) => {
  return fetch(`${base_url}/orders`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `user=${data.user}`
    +`&order=${JSON.stringify(data.order)}`
    +`&info=${JSON.stringify(data.info)}`
    +`&store=${JSON.stringify(data.store)}`
  }).then(res => res.json())
}