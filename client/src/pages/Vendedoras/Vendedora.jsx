import React, { useState } from 'react'
import './Vendedora.css'
import bicicleta from '../../components/bici.svg'
import clipboard from '../../components/clipboard.svg'
import { clientes } from '../../database/db.js'
import ModalAgregarVendedora from './ModalAgregarVendedora.jsx'
import { CardVendedora } from './CardVendedora.jsx'

const Vendedora = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  // const handleClick = () => {
  //   console.log("soy un console.log")
    
  // }

  //TODO: crear componente card y llamar aqui
  //TODO: cargar la informacion en cada tarjeta de DB o de forma local
  return (
    <section className='seccion-vendedoras'>
      <h2 className='titulo-seccion'>Sección Clientes</h2>

      <section className='cards-contenedor'>
      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>{clientes[0].nombre}</h3>
        <p className='direccion-vendedora'><span>Dirección:</span> {clientes[0].direccion}</p>
        <p className='ruta-vendedora'><span>Ruta:</span> {clientes[0].ruta}</p>
        <p className='puntos-vendedora'><span>Puntos:</span> {clientes[0].puntos}</p>
        <p className='telefono-vendedora'><span>Teléfono:</span> {clientes[0].telefono}</p>
      </div>

      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>{clientes[1].nombre}</h3>
        <p className='direccion-vendedora'><span>Dirección:</span> {clientes[1].direccion}</p>
        <p className='ruta-vendedora'><span>Ruta:</span> {clientes[1].ruta}</p>
        <p className='puntos-vendedora'><span>Puntos:</span> {clientes[1].puntos}</p>
        <p className='telefono-vendedora'><span>Teléfono:</span> {clientes[1].telefono}</p>
      </div>

      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>{clientes[2].nombre}</h3>
        <p className='direccion-vendedora'><span>Dirección:</span> {clientes[2].direccion}</p>
        <p className='ruta-vendedora'><span>Ruta:</span> {clientes[2].ruta}</p>
        <p className='puntos-vendedora'><span>Puntos:</span> {clientes[2].puntos}</p>
        <p className='telefono-vendedora'><span>Teléfono:</span> {clientes[2].telefono}</p>
      </div>

      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>{clientes[3].nombre}</h3>
        <p className='direccion-vendedora'><span>Dirección:</span> {clientes[3].direccion}</p>
        <p className='ruta-vendedora'><span>Ruta:</span> {clientes[3].ruta}</p>
        <p className='puntos-vendedora'><span>Puntos:</span> {clientes[3].puntos}</p>
        <p className='telefono-vendedora'><span>Teléfono:</span> {clientes[3].telefono}</p>
      </div>

      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>{clientes[4].nombre}</h3>
        <p className='direccion-vendedora'><span>Dirección:</span> {clientes[4].direccion}</p>
        <p className='ruta-vendedora'><span>Ruta:</span> {clientes[4].ruta}</p>
        <p className='puntos-vendedora'><span>Puntos:</span> {clientes[4].puntos}</p>
        <p className='telefono-vendedora'><span>Teléfono:</span> {clientes[4].telefono}</p>
      </div>
      {/* {vendedoras.map(vendedora =>{
        <CardVendedora/>
      })} */}
     

      </section>

      <button className='btn-agregar-vendedora' onClick={handleOpenModal}>+</button>
      <ModalAgregarVendedora isOpen={modalOpen} onClose={handleCloseModal}/>

    </section>
  )
}

export default Vendedora