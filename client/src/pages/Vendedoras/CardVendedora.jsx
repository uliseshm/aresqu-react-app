import React from 'react'
import { clientes } from '../../database/db'

export const CardVendedora = ({nombre, direccion, ruta, puntos, telefono}) => {
  return (
    <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora: {nombre}</h3>
        <p className='direccion-vendedora'>Dirección: {direccion}</p>
        <p className='ruta-vendedora'>Ruta: {ruta}</p>
        <p className='puntos-vendedora'>Puntos: {puntos}</p>
        <p className='telefono-vendedora'>Teléfono: {telefono}</p>
        <img src={bicicleta} alt="bicicleta" className='bici' />
        <img src={clipboard} alt="clipboard" className='clipboard'/>
      </div>
  )
}
