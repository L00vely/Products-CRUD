const pool = require('../model/database');

const { getProducts,
    createProduct,
    deleteProduct,
    updateProduct } = require('../model/adb');


exports.getProducts = async(req, res, next) => {
    const { productId, brandId, categoryId } = req.query;
    try {
        const products = await getProducts( productId, brandId, categoryId );
        return res.status(200).json({ data: products.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}


exports.createProduct = async(req, res, next) => {
    const { name, description, stock, price, multimedia, multimediaPath, categoryId, brandId } = req.body;
    try {
        const product = await createProduct(name, description, stock, price, multimedia, multimediaPath, categoryId, brandId);
        
        return res.status(201).json({ data: product.rows })
    } catch(err) {
        return res.status(400).json({
            error: err
        })
    }
}

exports.updateProduct = async (req, res, next) => {
    console.log(req.body);
    const { productId, name, description, stock, price, multimedia, multimediaPath, categoryId, brandId } = req.body;
    console.log(productId, name, description, stock, price, multimedia, multimediaPath, categoryId, brandId);
    try {
        const product = await updateProduct(productId, name, description, stock, price, multimedia, multimediaPath, categoryId, brandId);
        return res.status(200).json({ data: product.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.deleteProduct = async (req, res, next) => {
    const { id }= req.params;
    try {
        const product = await deleteProduct(id);
        return res.status(200).json({ data: product.rows })
    } catch(err) {
        return res.status(400).json({
            error: err
        })
    }
}