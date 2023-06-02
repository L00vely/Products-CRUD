const pool = require('../model/database');

const { getProducts,
    getProductsByBrandId,
    getProductsByCategoryId,
    createProduct,
    getProductById,
    deleteProductById,
    updateProduct } = require('../model/adb');


exports.getProducts = async(req, res, next) => {
    try {
        const products = await getProducts();
        return res.status(200).json({ data: products.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.getProductsByBrandId = async(req, res, next) => {
    const { brand_id } = req.params;
    try {
        const products = await getProductsByBrandId(brand_id);
        return res.status(200).json({ data: products.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.getProductsByCategoryId = async(req, res, next) => {
    const { category_id } = req.params;
    try {
        const products = await getProductsByCategoryId(category_id);
        return res.status(200).json({ data: products.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.createProduct = async(req, res, next) => {
    const { product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id } = req.body;
    try {
        const product = await createProduct(product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id);
        return res.status(201).json({ data: product.rows })
    } catch(err) {
        return res.status(400).json({
            error: err
        })
    }
}

exports.updateProduct = async (req, res, next) => {
    const { product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id } = req.body;
    try {
        const product = await updateProduct(product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id);
        return res.status(200).json({ data: product.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.getProductById = async(req, res, next) => {
    const { id }= req.params;
    try {
        const product = await getProductById(id);
        return res.status(200).json({ data: product.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.deleteProductById = async (req, res, next) => {
    const { id }= req.params;
    try {
        const product = await deleteProductById(id);
        return res.status(200).json({ data: product.rows })
    } catch(err) {
        return res.status(400).json({
            error: err
        })
    }
}