const pool = require('./database');


/* PRODUCTS */

const getProducts = () => {
    return pool.query('SELECT * FROM product ORDER BY product_id ASC');
}

const createProduct =  (name, description, stock, multimedia, multimedia_path, category_id, brand_id) => {
    return pool.query('INSERT INTO product (name, description, stock, multimedia, multimedia_path, category_id, brand_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [ name, description, stock, multimedia, multimedia_path, category_id, brand_id ]);
}

const getProductById = id => {
    return pool.query('SELECT * FROM product WHERE product_id = $1', [ id ]);
}

const deleteProductById = id => {
    return pool.query('DELETE FROM product WHERE product_id = $1', [ id ]);
}

const updateProduct= ( product_id, name, description, stock, multimedia, multimedia_path, category_id, brand_id ) => {
    return pool.query('UPDATE product SET name = $2, description = $3, stock = $4, multimedia = $5, multimedia_path = $6, category_id = $7, brand_id = $8 WHERE product_id = $1', 
        [ product_id, name, description, stock, multimedia, multimedia_path, category_id, brand_id  ]);
}

/*  GET IMAGE*/
const getMultimedia =  id => {
    return pool.query('SELECT multimedia FROM product WHERE product_id = $1', [ id ])
}

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProductById,
    updateProduct,
    getMultimedia
};