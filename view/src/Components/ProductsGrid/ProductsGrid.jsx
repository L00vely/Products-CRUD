import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Product } from "../Product/Product";
import { Menu } from "../Menu/Menu";
import { CreateForm } from "../CreateForm/CreateForm";
import { useState } from "react";

export const ProductsGrid = () => {
    const { products, loading } = useFetchProducts();
    const [ visible, setVisible ] = useState(false);


    return(
        <main className="products-page">
            <Menu 
                setVisible = {setVisible}
            />
            

            { visible ? ( <div className="products-grid-container">
                {products.map((product, index) => {
                    return(
                        <Product 
                            {...product}
                            key = {index}
                        />
                    )
                })}
            </div> ) : (<></>)}
           

            
        </main> 
    )
} 
