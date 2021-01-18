const express = require('express');
const product = require('./workingWithFile')
const app = express();

app.use(express.json());

app.get('/products', (request, response) => {
    response.send(product.getAllProducts());
});

app.get('/product/:id', (request, response) => {
    response.send(product.findProductByID(+request.params.id));
});

app.post('/product', (request, response) => {
    if (product.addProduct(request.body)) {
      response.json({result:'ok'});
    } else {
      response.json({error:'Product not created'})
    }
});

app.put('/product/:id', (request, response) => {
    if (product.updateProduct(+request.params.id, request.body)) {
      response.json({result:'ok'});
    } else {
      response.json({error:'Product not updated'})
    }
});

app.delete('/product/:id', (request, response) => {
    if (product.deleteProduct(+request.params.id)) {
      response.json({result:'ok'});
    } else {
      response.json({error:'Product not deleted'})
    }
});
 
app.listen(80, (err) => {
    if (err) return console.log('something bad happened', err);
    console.log('server is listening 80')
});