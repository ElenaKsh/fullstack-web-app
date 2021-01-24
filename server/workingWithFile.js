const fs = require('fs');

function getAllProducts() {
  const fileContent = fs.readFileSync('server/products.json', 'utf8');
  return JSON.parse(fileContent);
}

function findProductByID(id) {
  const fileContent = fs.readFileSync('server/products.json', 'utf8');
  const products = JSON.parse(fileContent);
  const product = products.find(function(product){
    return product.id === id;
  });

  if(product === undefined){
    return false;
  }

  return product;
}

function addProduct(product) {
  const fileContent = fs.readFileSync('server/products.json', 'utf8');
  let products = JSON.parse(fileContent);
  products.push(product);
  fs.writeFileSync('server/products.json', JSON.stringify(products));
  return true;
}

function updateProduct(id, product) {
  const fileContent = fs.readFileSync('server/products.json', 'utf8');
  let products = JSON.parse(fileContent);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i] = product;
      fs.writeFileSync('server/products.json', JSON.stringify(products));
      return true;
    }
  }
}

function deleteProduct(id) {
  const fileContent = fs.readFileSync('server/products.json', 'utf8');
  let products = JSON.parse(fileContent);
  const index = products.findIndex(function(product){
    return product.id === id;
  });

  if(index === -1){
    return false;
  }
  products.splice(index, 1);
  fs.writeFileSync('server/products.json', JSON.stringify(products));
  return true;

}

exports.getAllProducts = getAllProducts;
exports.findProductByID = findProductByID;
exports.addProduct = addProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;

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



