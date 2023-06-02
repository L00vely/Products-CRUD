import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../util/fetchProducts";

export const useFetchProductsByCategory = (id) => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState( true );

    useEffect( () => {
        setLoading(true);
        const getProductsInfo = async() => {
            const res = await fetchProductsByCategory(id);
            setProducts(res.data);
            setLoading(false);  
        }
        getProductsInfo();
    }, [id]);


    return {
        products: products,
        loading: loading
    }
}