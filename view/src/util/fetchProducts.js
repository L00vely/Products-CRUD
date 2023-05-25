export const fetchProducts = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/products');
        const data = await res.json();
        return data;
  } catch(error){
        return {error}
    }
    
}
