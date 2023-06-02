export const Video = props => {
    const { multimedia_path } = props;
    return (
        <video width="320" height="240" controls>
            <source src={require(`../../${multimedia_path}`)} type="video/mp4" />
            <source src={require(`../../${multimedia_path}`)} type="video/webm" />
            <source src={require(`../../${multimedia_path}`)} type="video/ogg" />
            Tu navegador no admite la reproducción de videos.
        </video>
    )
}