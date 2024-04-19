import React, { useState } from 'react'
import { clientes } from '../../database/db'
import './ModalAgregarVendedora.css'

const ModalAgregarVendedora = ({isOpen, onClose}) => {

    //definimos donde se guardaran los datos del formulario
    const [formData, setFormData] = useState({
        "nombre": '',
        "direccion": '',
        "ruta": '',
        "puntos": '',
        "telefono": ''
    })

    const [dataBaseClientes, setDataBaseClientes] = useState(clientes);

    //obtenemos los datos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    //agregamos los datos en DB, en este caso de forma local
    const handleSubmit = (event, formData) => {
        event.preventDefault()
        //console.log(dataBaseClientes)
        console.log(formData)
        //setDataBaseClientes(...dataBaseClientes, formData)
        //consolelog(dataBaseClientes)
        //console.log("formulario enviado");
        setTimeout(() => {
            onClose();
            }, 2000);
    }



  return (
    
    <div style={{display: isOpen ? 'block':'none'}} className='modal-overlay'>
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
        </form>
        <button onClick={onClose} className='modal-close'>Cerrar</button>
    </div>
    </div>
  )
}

export default ModalAgregarVendedora