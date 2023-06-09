import { Audio } from "../Audio/Audio";
import { Image } from "../Image/Image";
import { Video } from "../Video/Video";


export const Product = props => {
    const { product_id, name, description, stock, price, multimedia_path, category_id, brand_id } = props;
    return(
        <div className="product-container">
            <div className="product-top">
                <p><strong>Product:</strong> {product_id}</p>
                <p><strong>Category:</strong> {category_id}</p>
                <p><strong>Brand:</strong> {brand_id}</p>
            </div>
            
            <div className="product__multimedia">
                {["jpg", "png", "jpeg", "webp"].includes(multimedia_path.split(".").pop()) ? (
                        <Image multimedia_path={multimedia_path} />
                    ) : (
                        ["mp4", "webm", "ogg"].includes(multimedia_path.split(".").pop()) ? (
                            <Video multimedia_path={multimedia_path} />
                          ) : (
                            ["m4a", "mpeg", "wav", "ogg"].includes(multimedia_path.split(".").pop()) ? (
                                <Audio multimedia_path={multimedia_path} />
                              ) : (
                                <span>No se puede mostrar el archivo multimedia.</span>
                            )
                        )
                    )
                }
           
            </div>
            <div className="product__info">
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
            <p>{ description }</p>
            <strong>{stock} {stock > 1 ?  "unidades disponibles" : "unidad disponible"}  </strong>
            
        </div>
    )
}

