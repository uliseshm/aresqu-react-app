import React from 'react'
import { clientes } from '../../database/db'

export const CardVendedora = (props) => {
  return (
    <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora: {nombre}</h3>
        <p className='direccion-vendedora'>Dirección: Monte Olimpo #329</p>
        <p className='ruta-vendedora'>Ruta: DGO</p>
        <p className='puntos-vendedora'>Puntos: 21000</p>
        <p className='telefono-vendedora'>Teléfono: 00 46 46 99 01</p>
        <img src={bicicleta} alt="bicicleta" className='bici' />
        <img src={clipboard} alt="clipboard" className='clipboard'/>
      </div>
  )
}
