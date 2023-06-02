import React, { useState } from "react";
import { Field } from "../Field/Field";

export const CreateForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [multimedia, setMultimedia] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado:");
        console.log("Nombre:", name);
        console.log("Description:", description);
        console.log("Stock:", stock);
        console.log("Price:", price);
        setName('');
        setDescription('');
        setPrice(0);
        setStock(0);
    };

    return (
        <form onSubmit={handleSubmit} method="post">
            
            <Field 
                label = "Nombre"
                value =  {name}
                event = {setName}
                type = {"text"}
            />

            <Field 
                label = "Descripción"
                value =  {description}
                event = {setDescription}
                type = {"text"}
            />

            <Field 
                label = "Stock"
                value =  {stock}
                event = {setStock}
                type = {"number"}
            />
            
            <Field 
                label = "Price"
                value =  {price}
                event = {setPrice}
                type = {"number"}
            />

            {/* <Field 
                label = "Multimedia"
                value =  {multimedia}
                event = {setMultimedia}
                type = {"file"}
            /> */}

    

            <button type="submit">Enviar</button>
        </form>
    );
};
