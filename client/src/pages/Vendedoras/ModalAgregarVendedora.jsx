import React, { useState } from 'react'
import { clientes } from '../../database/db'
import './ModalAgregarVendedora.css'
//import fs from 'fs'

const ModalAgregarVendedora = ({ isOpen, onClose }) => {

    //definimos donde se guardaran los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        ruta: '',
        puntos: '',
        telefono: ''
    })

    const [dataBaseClientes, setDataBaseClientes] = useState(clientes);

    //obtenemos los datos del formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    //agregamos los datos en DB, en este caso de forma local
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        console.log("formulario enviado");
        setFormData({
            nombre: '',
            direccion: '',
            ruta: '',
            puntos: '',
            telefono: ''
        })

        setTimeout(() => {
            onClose();
            }, 2000);
    }



    return (

        <div style={{ display: isOpen ? 'block' : 'none' }} className='modal-overlay'>
            <div className='modal-content'>
                <h2>Nueva vendedora</h2>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre de la vendedora"
                    />
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        placeholder="Direccion de la vendedora"
                    />
                    <input
                        type="text"
                        name="ruta"
                        value={formData.ruta}
                        onChange={handleChange}
                        placeholder="Ruta de la vendedora"
                    />
                    <input
                        type="number"
                        name="puntos"
                        value={formData.puntos}
                        onChange={handleChange}
                        placeholder="Puntos de la vendedora"
                    />
                    <input
                        type="text"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Telefono de la vendedora"
                    />
                    <button type="submit" className='modal-submit'>Enviar</button>
                <button onClick={onClose} className='modal-close'>Cerrar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalAgregarVendedora