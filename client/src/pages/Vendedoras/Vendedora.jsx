import React from 'react'
import './Vendedora.css'
import bicicleta from '../../components/bici.svg'
import clipboard from '../../components/clipboard.svg'
import BottomMenu from '../../components/BottomMenu'
import { clientes } from '../../database/db.js'

const Vendedora = () => {

  const handleSubmit = () => {

    
  }

  //TODO: crear componente card y llamar aqui
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
     

      </section>

      <button className='btn-agregar-vendedora' onSubmit={handleSubmit}>+</button>

    </section>
  )
}

export default Vendedora