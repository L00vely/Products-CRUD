export const Image = props => {
    const { multimedia_path } = props;
    return (
        <img src={require(`../../${multimedia_path}`)} alt="Multimedia product" />
    )
}