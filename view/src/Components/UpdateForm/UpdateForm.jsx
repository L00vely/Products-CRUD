import React, { useState } from 'react';
import { Field } from '../Field/Field';

export const UpdateForm = props => {
    const [productId, setProductId] = useState('');
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
      
      let name = file.name;
      if(["jpg", "png", "jpeg", "webp"].includes(name.split(".").pop())){
        name = `public/imgs/${name}`;
      } else if (["mp4", "webm", "ogg"].includes(name.split(".").pop())) {
        name = `public/videos/${name}`;
      } else if ( ["m4a", "mpeg", "wav", "ogg"].includes(name.split(".").pop())) {
        name = `public/audios/${name}`;
      }
   
      setMultimedia(file);
      setMultimediaPath(name);
    };

  
    const handleSubmit = (e) => {
      e.preventDefault();

      // Construye los datos del formulario en formato JSON
      const formData = {
        productId,
        name,
        description,
        stock,
        price,
        multimedia,
        multimediaPath,
        brandId,
        categoryId,
      };

      fetch(`http://localhost:3000/api/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setProductId('');
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
        <h2>PUT</h2>
        <Field 
          label={"Product id"}
          value={productId}
          event={setProductId}
          type="text"
        />
        <br />
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
              id="multimedia"
              name="multimedia"
             
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
