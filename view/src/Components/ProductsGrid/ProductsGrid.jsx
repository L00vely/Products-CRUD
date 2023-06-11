import { useState } from "react";
import { Product } from "../Product/Product";
import { Menu } from "../Menu/Menu";
import { GetForm } from "../GetForm/GetForm";
import { UpdateForm } from "../UpdateForm/UpdateForm";
import { DeleteForm } from "../DeleteForm/DeleteForm";
import { CreateForm } from "../CreateForm/CreateForm";

export const ProductsGrid = () => {
    const [ products, setProducts ] = useState([]);
    const [ visibleC, setVisibleC ] = useState(true);
    const [ visibleR, setVisibleR ] = useState(false);
    const [ visibleU, setVisibleU ] = useState(false);
    const [ visibleD, setVisibleD ] = useState(false);



    const handleC = () => {
        if(!visibleC){
            setVisibleC(true);
            setVisibleR(false);
            setVisibleU(false);
            setVisibleD(false);
        }
    };

    const handleR = () => {
        if(!visibleR){
            setVisibleR(true);
            setVisibleC(false);
            setVisibleU(false);
            setVisibleD(false);
        }
    };

    const handleU = () => {
        if(!visibleU){
            setVisibleU(true);
            setVisibleR(false);
            setVisibleC(false);
            setVisibleD(false);
        }
    };

    const handleD = () => {
        if(!visibleD){
            setVisibleD(true);
            setVisibleR(false);
            setVisibleU(false);
            setVisibleC(false);
        }
    };

    return(
        <main className="products-page">
            <Menu 
                handleC = {handleC}
                handleR = {handleR}
                handleU = {handleU}
                handleD = {handleD}
            />

            {
                visibleC ? (
                        <CreateForm 
                            getProducts = {setProducts}
                        />
                    ) : <></>
            }


            {   
                visibleR ? (
                    <GetForm 
                        getProducts = {setProducts}
                    />
                ) : <></>
            }

            {   
                visibleU ? (
                        <UpdateForm/>
                    ) : <></>
            }

            {
                visibleD ? (
                        <DeleteForm
                            getProducts = {setProducts}
                        />
                    ) : <></>
            }


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
