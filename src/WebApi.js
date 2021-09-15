const base_url = 'https://react-blog-a5a6e-default-rtdb.firebaseio.com'
export const addOrder = (data) => {
  return fetch(`${base_url}/orders.json`,{
    method:'POST',
    body: JSON.stringify({
      order: data.order,
      user: data.user
    })
  }).then(res => res.json())
}