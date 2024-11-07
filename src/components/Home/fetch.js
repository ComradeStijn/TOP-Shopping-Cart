export default async function fetchItems(limit) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

