import { useState, useEffect } from "react";
import { fetchProductsByBrand } from "../util/fetchProducts";

export const useFetchProductsByBrand = (id) => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState( true );

    useEffect( () => {
        setLoading(true);
        const getProductsInfo = async() => {
            const res = await fetchProductsByBrand(id);
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