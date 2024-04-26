import React from 'react'
import './Vendedora.css'

export const CardVendedora = ({ datos }) => {

  return (
    <div className="card-container-vendedora">
      <h3 className='nombre-vendedora'>{datos.nombre}</h3>
      <p className='direccion-vendedora'><span>Dirección:</span> {datos.direccion}</p>
      <p className='ruta-vendedora'><span>Ruta:</span> {datos.ruta}</p>
      <p className='puntos-vendedora'><span>Puntos:</span> {datos.puntos}</p>
      <p className='telefono-vendedora'><span>Teléfono:</span> {datos.telefono}</p>
    </div>
  )
}
