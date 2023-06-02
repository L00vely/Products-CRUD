export const Audio = props => {
    const { multimedia_path } = props;
    return (
        <audio controls>
            <source src={require(`../../${multimedia_path}`)} type="audio/mpeg" />
            <source src={require(`../../${multimedia_path}`)} type="audio/wav" />
            <source src={require(`../../${multimedia_path}`)} type="audio/ogg" />
            Tu navegador no admite la reproducción de audio.
        </audio>

    )
}