const express = require('express');
const productsRouter = express.Router();

const { getProducts,
    createProduct,
    getProductById,
    deleteProductById,
    updateProduct } = require('../controller/productsController');


productsRouter.get('/products', getProducts);
productsRouter.post('/products', createProduct);
productsRouter.get('/products/:id', getProductById);
productsRouter.delete('/products/:id', deleteProductById);
productsRouter.put('/products/:id', updateProduct);


module.exports = productsRouter;
