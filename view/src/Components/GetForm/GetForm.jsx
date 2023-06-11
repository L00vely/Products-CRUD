import React, { useState } from 'react';
import { Field } from '../Field/Field';

export const GetForm = props => {
    const { getProducts  } = props;
    const [productId, setProductId] = useState('');
    const [brandId, setBrandId] = useState('');
    const [categoryId, setCategoryId] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `/products?productId=${productId}&brandId=${brandId}&categoryId=${categoryId}`;
        fetch(`http://localhost:3000/api/${url}`)
        .then((response) => response.json())
        .then((data) => {
          getProducts(data.data);
        })
         
        setProductId('');
        setBrandId('');
        setCategoryId('');
    };
  
    return (
    
     
      <form onSubmit={handleSubmit}>
        <h2>GET</h2>
        <Field 
          label={"Product ID"}
          value={productId}
          event={setProductId}
          type="text"
        />

        <br />
        <Field 
          label={"Brand ID"}
          value={brandId}
          event={setBrandId}
          type="text"
        />
      
        <br />
        <Field 
          label={"Category ID"}
          value={categoryId}
          event={setCategoryId}
          type="text"
        />
        
        <br />
        <button type="submit">Enviar</button>
      </form>
   
      
    )
}
