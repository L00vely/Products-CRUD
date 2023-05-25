import { Image } from "../Image/Image";

export const Product = props => {
    const { product_id, name, description, stock, multimedia, multimedia_path, category_id, brand_id } = props;

    return(
        <section>
            <h1>{name}</h1>
            <div className="product__img">
                <Image 
                    path = { multimedia_path } 
                    alt = { name }
                />
            </div>
        </section>
    )
}

