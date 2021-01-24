const express = require('express');
const product = require('./workingWithFile');
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.get('/products', (request, response) => {
  response.send(product.getAllProducts());
});

app.get('/product/:id', (request, response) => {
  const id = +request.params.id;
  if (Number(id) !== id) {
    return response.status(400).json({ error: `Inccorect id` });
  }
  response.send(product.findProductByID(id));
});

app.post('/product', (request, response) => {
  if (product.addProduct(request.body)) {
    response.json({ result: 'ok' });
  } else {
    response.json({ error: 'Product not created' });
  }
});

app.put('/product/:id', (request, response) => {
  const id = +request.params.id;
  if (Number(id) !== id) {
    return response.status(400).json({ error: `Inccorect id` });
  }
  if (product.updateProduct(id, request.body)) {
    response.json({ result: 'ok' });
  } else {
    response.json({ error: 'Product not updated' });
  }
});

app.delete('/product/:id', (request, response) => {
  const id = +request.params.id;
  if (Number(id) !== id) {
    return response.status(400).json({ error: `Inccorect id` });
  }
  if (product.deleteProduct(id)) {
    response.json({ result: 'ok' });
  } else {
    response.json({ error: 'Product not deleted' });
  }
});

app.listen(80, (err) => {
  if (err) return console.log('something bad happened', err);
  console.log('server is listening 80');
});
