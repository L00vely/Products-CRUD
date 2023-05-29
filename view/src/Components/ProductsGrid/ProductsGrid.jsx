import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Product } from "../Product/Product";
import { Form } from "../Form/Form";
import { Menu } from "../Menu/Menu";

export const ProductsGrid = () => {
    const { products, loading } = useFetchProducts();

    return(
        <main className="products-page">
            <Menu />
            <div className="products-grid-container">
                {products.map((product, index) => {
                    return(
                        <Product 
                            {...product}
                            key = {index}
                        />
                    )
                })}
            </div>
        </main> 
    )
} 
