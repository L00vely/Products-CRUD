const express = require('express');
const productsRouter = express.Router();

const { getProducts,
    createProduct,
    deleteProduct,
    updateProduct } = require('../controller/productsController');


productsRouter.get('/products', getProducts);
productsRouter.post('/products', createProduct);
productsRouter.delete('/products/:id', deleteProduct);
productsRouter.put('/products/:id', updateProduct);


module.exports = productsRouter;
