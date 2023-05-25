import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Product } from "../Product/Product";

export const ProductsGrid = () => {
    const { products, loading } = useFetchProducts();
    
    return(
        <main className="plants-page">
           
          
                {products.map((product, index) => {
                    return(
                        <Product 
                            {...product}
                            key = {index}
                        />
                    )
                })}
        

         
        </main>
        
    )
} 
