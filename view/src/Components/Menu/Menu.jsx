import { Button } from "../Button/Button"

export const Menu = props => {
    
    
    return (
        <div className="menu-container">
            <Button 
                operation="CREATE" 
                iconName="create-new"
            />
            <Button 
                operation="READ" 
                iconName="read"
            />
            <Button 
                operation="UPDATE" 
                iconName="restart--v1"
            />
            <Button 
                operation="DELETE" 
                iconName="filled-trash"
            />
        </div>
    )
}

