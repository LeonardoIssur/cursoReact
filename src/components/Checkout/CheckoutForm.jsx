import React, { useState } from "react";
import classes from '../Checkout/CheckoutForm.module.css'

const CheckoutForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={classes.formContainer}>
            <h1>Ingresa tus Datos</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre y Apellido:
                    <input 
                        type="text" 
                        name="Name" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        placeholder="nombre y apellido"
                    />
                </label>
                <br />

                <label>
                    Dirección:
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder="direccion"
                    />
                </label>
                <br />

                <label>
                    email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="email"
                    />
                    <span className={classes.placeholder} data-content="Ingrese su primer nombre"></span>
                </label>
                <br />

                <label>
                    Celular:
                    <input 
                        type="text" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="celular"
                    />
                </label>
                <br />

                <button type="submit">Generar Orden</button>
            </form>
        </div>
        
    );
};

export default CheckoutForm;
