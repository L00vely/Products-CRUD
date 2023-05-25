import { useState, useEffect } from "react";
import { fetchProducts } from "../util/fetchProducts";

export const useFetchProducts = () => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState( true );

    useEffect( () => {
        setLoading(true);
        const getProductsInfo = async() => {
            const res = await fetchProducts();
            setProducts(res.data);
            setLoading(false);  
        }
        getProductsInfo();
    }, []);


    return {
        products: products,
        loading: loading
    }
}