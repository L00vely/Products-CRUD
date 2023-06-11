export const Field = props => {
    const { label, value, event, type } = props;
    return(
        <div className="field-container">
            <label htmlFor={label}>{label}:</label>
            <input
                type={type}
                min="0"
                id={value}
                name={value}
                value={value}
                onChange={(e) => event(e.target.value)}
                
            />
        </div>
    )
}