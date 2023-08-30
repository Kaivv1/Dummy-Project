export const API_URL = 'https://dummyjson.com';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) throw Error('Failed getting the products');

  const data = await res.json();

  const { products } = data;

  return products;
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`);

  if (!res.ok) throw Error(`Failed getting product ${id}`);

  const data = await res.json();

  return data;
}

export async function getProductsByName(query) {
  const res = await fetch(`${API_URL}/products/search?q=${query}`);

  if (!res.ok) throw Error(`Failed getting products ${query}`);

  const data = await res.json();

  console.log(data);
}

export async function createProduct(newProduct) {
  try {
    const res = await fetch(`${API_URL}/products/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    if (!res.ok) throw Error;
    if (res.ok) alert('You have successfully listed your new product');

    const data = await res.json();
    console.log(data);
  } catch (err) {
    throw Error('Failed to create your product');
  }
}

export async function editProduct(id, editObj) {
  try {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editObj),
    });

    if (!res.ok) throw Error();
    if (res.ok) alert('You have successfully edited the product.');

    const data = await res.json();
    console.log(data);
  } catch (err) {
    throw Error('Failed to edit the product');
  }
}

export async function deleteProduct(id) {
  try {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw Error();
    if (res.ok)
      return alert(
        'The product has been deleted successfully. Returning to products page..',
      );

    const data = await res.json();

    console.log(data);
  } catch (err) {
    throw Error(`Failed to delete the product: ${err.message}`);
  }
}

export async function getProductsByCategory(categoryId) {
  try {
    const res = await fetch(`${API_URL}/products/category/${categoryId}`);

    if (!res.ok) throw Error();

    const data = await res.json();

    console.log(data);
  } catch (err) {
    throw Error('Failed to get the category products');
  }
}
