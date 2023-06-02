export const fetchProducts = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/products');
        const data = await res.json();
        return data;
  } catch(error){
        return {error}
    }
    
}

export const fetchProductsByBrand = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/brand/${id}`);
        const data = await res.json();
        return data;
  } catch(error){
        return {error}
    }
}

export const fetchProductsByCategory= async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/category/${id}`);
        const data = await res.json();
        return data;
  } catch(error){
        return {error}
    }
    
}
