const fs = require('fs');

function getAllProducts() {
  let fileContent = fs.readFileSync('products.json', 'utf8');
  return JSON.parse(fileContent);
}

function findProductByID(id) {
  let fileContent = fs.readFileSync('products.json', 'utf8');
  let products = JSON.parse(fileContent);
  for (let i = 0; i <= products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    } else {
      return false;
    }
  }
}

function addProduct(product) {
  let fileContent = fs.readFileSync('products.json', 'utf8');
  let products = JSON.parse(fileContent);
  products.push(product);
  fs.writeFileSync('products.json', JSON.stringify(products));
  return true;
}

function updateProduct(id, product) {
  let fileContent = fs.readFileSync('products.json', 'utf8');
  let products = JSON.parse(fileContent);
  for (let i = 0; i <= products.length; i++) {
    if (products[i].id === id) {
      products[i] = product;
      fs.writeFileSync('products.json', JSON.stringify(products));
      return true;
    }
  }
}

function deleteProduct(id) {
  let fileContent = fs.readFileSync('products.json', 'utf8');
  let products = JSON.parse(fileContent);
  for (let i = 0; i <= products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
      fs.writeFileSync('products.json', JSON.stringify(products));
      return true;
    }
  }
}

/*console.log(
  addProduct({
    id: 3,
    product_name: 'banana',
    product_price: 7,
    product_amount: 1,
  })
);*/

/*console.log(
  updateProduct(1, {
    id: 1,
    product_name: 'apple',
    product_price: 10,
    product_amount: 1,
  })
);*/

//console.log(deleteProduct(3));

console.log(getAllProducts());

console.log(findProductByID(2));
