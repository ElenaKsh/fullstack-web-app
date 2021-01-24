export async function getAllProducts() {
  const response = await fetch('http://localhost:80/products');
  const products = await response.json();
  return products;
}

export async function addProduct(product) {
  const response = await fetch('http://localhost:80/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(product)
  });
  return response.ok;
}

export async function deleteProduct(id) {
  const response = await fetch(`http://localhost:80/product/${id}`, {
    method: 'DELETE'
  });
  return response.ok;
}

export async function editProduct(id, product) {
  const response = await fetch(`http://localhost:80/product/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(product)
  });
  return response.ok;
}
