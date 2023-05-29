

export const Product = props => {
    const { product_id, name, description, stock, price, multimedia_path } = props;
    return(
        <div className="product-container">
            <div className="product__multimedia">
                <p>{multimedia_path}</p>
                <img src={require(`../../${multimedia_path}`)} alt="Multimedia product" />
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

