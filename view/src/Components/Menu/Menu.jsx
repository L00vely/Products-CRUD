import { Button } from "../Button/Button";

export const Menu = props => {
    const { handleC, handleR, handleU, handleD } = props; 
    
    return (
        <div className="menu-container">
            <Button 
                operation="CREATE" 
                iconName="create-new"
                handleClick={handleC}

            />
            <Button 
                operation="READ" 
                iconName="read"
                handleClick={handleR}
            />
            <Button 
                operation="UPDATE" 
                iconName="restart--v1"
                handleClick={handleU}

            />
            <Button 
                operation="DELETE" 
                iconName="filled-trash"
                handleClick={handleD}

            />
        </div>
    )
}

