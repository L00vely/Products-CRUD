const pool = require('./database');


/* PRODUCTS */

const getProducts = (product_id, brand_id, category_id) => {
    let query = "SELECT * FROM product WHERE TRUE";
    const values = [];

    // Verificar si se proporciona el id del producto
    if (product_id) {
      query += ' AND product_id = $' + (values.length + 1);
      values.push(product_id);
    }

    // Verificar si se proporciona el id de la marca
    if (brand_id) {
      query += ' AND brand_id = $' + (values.length + 1);
      values.push(brand_id);
    }

    // Verificar si se proporciona el id de la categoria
    if (category_id) {
        query += ' AND category_id = $' + (values.length + 1);
        values.push(category_id);
    }

    return pool.query(query, values);
}

const createProduct =  (name, description, stock, price, multimedia, multimedia_path, category_id, brand_id) => {
    return pool.query('INSERT INTO product (name, description, stock, price, multimedia, multimedia_path, category_id, brand_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [ name, description, stock, price, multimedia, multimedia_path, category_id, brand_id ]);
}

const deleteProduct = id => {
    return pool.query('DELETE FROM product WHERE product_id = $1', [ id ]);
}

const updateProduct= ( product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id ) => {
    return pool.query('UPDATE product SET name = $2, description = $3, stock = $4, price = $5, multimedia = $6, multimedia_path = $7, category_id = $8, brand_id = $9 WHERE product_id = $1', 
        [ product_id, name, description, stock, price, multimedia, multimedia_path, category_id, brand_id  ]);
}

module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
};