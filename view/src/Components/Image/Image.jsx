import React, { useEffect, useState } from 'react';

export const Image = () => {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/multimedia/1')
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const base64Image = btoa(
          new Uint8Array(buffer)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        const imageUrl = `data:image/jpeg;base64,${base64Image}`;
        setImageData(imageUrl);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return <img src={imageData} alt="Imagen cargada desde PostgreSQL" />;
};

