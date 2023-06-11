import React, { useState } from 'react';
import { Field } from '../Field/Field';

export const CreateForm = props => {
  const { getProducts  } = props;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [multimedia, setMultimedia] = useState(null);
  const [multimediaPath, setMultimediaPath] = useState('');
  const [brandId, setBrandId] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      // reader.onload = () => {
      //   const arrayBuffer = reader.result;
      //   console.log(arrayBuffer);
      //   const blob = new Blob([arrayBuffer], { type: file.type });
      
        
      //   // Utiliza el objeto Blob como desees
      //   console.log(blob);
      //   setMultimedia(blob);
      //   setMultimediaPath(file.name);
      // };

      reader.onerror = (error) => {
        console.error('Error al leer el archivo:', error);
      };

      reader.readAsArrayBuffer(multimedia);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(multimedia);

    // Construye los datos del formulario en formato JSON
    const formData = {
      name,
      description,
      stock,
      price,
      multimedia,
      multimediaPath,
      brandId,
      categoryId,
    };

    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    fetch(`http://localhost:3000/api/products`)
    .then((response) => response.json())
    .then((data) => {
      getProducts(data.data);
    })


    setName('');
    setDescription('');
    setPrice(0);
    setStock(0);
    setBrandId('');
    setCategoryId('');
    setMultimedia(null);
    setMultimediaPath('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>CREATE</h2>
      <Field 
        label={"Name"}
        value={name}
        event={setName}
        type="text"
      />
      <br />
      <Field 
        label={"Description"}
        value={description}
        event={setDescription}
        type="text"
      />
      <br />
      <Field 
        label={"Stock"}
        value={stock}
        event={setStock}
        type="number"
      />
      <br />
      <Field 
        label={"Price"}
        value={price}
        event={setPrice}
        type="number"
      />
      <br />

      <div className="field-container">
          <label className="input-carga-archivos">Multimedia:</label>
          <input 
            type="file" 
            onChange={handleFileChange}  
            className="label-carga-archivos"            
          />
      </div>
      
      
      <br />
      <Field 
        label={"Multimedia path"}
        value={multimediaPath}
        event={setMultimediaPath}
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
