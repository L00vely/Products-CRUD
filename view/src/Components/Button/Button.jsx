import { useState } from "react";
import PropTypes from 'prop-types';

export const  Button = ( { operation, iconName } ) => {
    const [ iconColor, setIconColor ] = useState('7067CF');
   
    const handleOnMouseOver = () => {
        setIconColor('F6F6F6');
    }

    const handleOnMouseOut = () => {
        setIconColor('7067CF');
    }
    
    return (
        <button 
            type='button'  
            onMouseOver={e => handleOnMouseOver()}
            onMouseOut={e => handleOnMouseOut()}
        >
            <img src={`https://img.icons8.com/material-rounded/${iconColor}/32/${iconName}`} alt={iconName}/>
            <p><strong>{operation.charAt(0)}</strong>{operation.slice(1)}</p>
        </button>
    )
}



