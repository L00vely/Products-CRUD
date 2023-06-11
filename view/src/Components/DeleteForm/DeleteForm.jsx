import React, { useState } from 'react';
import { Field } from '../Field/Field';

export const DeleteForm = props => {
    const { getProducts  } = props;
    const [productId, setProductId] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      
      fetch(`http://localhost:3000/api/products/${productId}`, {
        method: 'DELETE',
      })

      fetch(`http://localhost:3000/api/products`)
        .then((response) => response.json())
        .then((data) => {
          getProducts(data.data);
      });
      
      setProductId('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Delete</h2>
      
        <Field 
          label={"Product ID"}
          value={productId}
          event={setProductId}
          type="text"
        />
        
        <br />
        <button type="submit">Enviar</button>

       
      </form>
   
      
    )
}