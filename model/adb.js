const pool = require('./database');


/* PRODUCTS */

const getProducts = () => {
    return pool.query('SELECT * FROM product ORDER BY product_id ASC');
}

const getProductsByBrandId= brand_id => {
    return pool.query('SELECT * FROM product WHERE brand_id = $1 ORDER BY product_id ASC', [ brand_id ]);
}

const getProductsByCategoryId= category_id => {
    return pool.query('SELECT * FROM product WHERE category_id = $1 ORDER BY product_id ASC', [ category_id ]);
}

const getProductById = id => {
    return pool.query('SELECT * FROM product WHERE product_id = $1', [ id ]);
}

const createProduct =  (name, description, stock, price, multimedia, multimedia_path, category_id, brand_id) => {
    return pool.query('INSERT INTO product (name, description, stock, price, multimedia, multimedia_path, category_id, brand_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [ name, description, stock, price, multimedia, multimedia_path, category_id, brand_id ]);
}

const deleteProductById = id => {
    return pool.query('DELETE FROM product WHERE product_id = $1', [ id ]);
}

const updateProduct= ( product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id ) => {
    return pool.query('UPDATE product SET name = $2, description = $3, stock = $4, price = $5, multimedia = $6, multimedia_path = $7, category_id = $8, brand_id = $9 WHERE product_id = $1', 
        [ product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id  ]);
}

module.exports = {
    getProducts,
    getProductsByBrandId,
    getProductsByCategoryId,
    createProduct,
    getProductById,
    deleteProductById,
    updateProduct
};