export default async function fetchItems(limit) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function fetchById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}