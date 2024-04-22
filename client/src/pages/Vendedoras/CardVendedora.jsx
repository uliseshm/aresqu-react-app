import React from 'react'
import './Vendedora.css'

export const CardVendedora = ({ datos }) => {

  return (
    <div className="card-container-vendedora">
      <h3 className='nombre-vendedora'>{datos.nombre}</h3>
      <p className='direccion-vendedora'>Dirección: {datos.direccion}</p>
      <p className='ruta-vendedora'>Ruta: {datos.ruta}</p>
      <p className='puntos-vendedora'>Puntos: {datos.puntos}</p>
      <p className='telefono-vendedora'>Teléfono: {datos.telefono}</p>
    </div>
  )
}
