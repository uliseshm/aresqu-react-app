import React from 'react'
import iconBorrar from '../../assets/iconos/icon-borrar.png'
import iconEditar from '../../assets/iconos/icon-editar.png'
import './Pedidos.css'

const Pedidos = () => {
  return (
    <section>
      <h2>Secccion de Pedidos</h2>
      <section className='contenedor-pedidos'>
        <div className="card-container">
          <div className="card-seccion-info">
          <h3 className='nombre-vendedora'>Fulanita detal</h3>
          <p className='ruta-vendedora'>Ruta: DGO</p>
          <p className='numero-pedido'>N° pedido: #329</p>
          <p className='total-pedido'>Total: $2000</p>
          <p className='total-vendido'>Vendido: $1300</p>
          <button>Ver detalles</button>
          </div>
          <div className="card-seccion-estado">
            <img src={iconBorrar} alt="borrar pedido" />
            <img src={iconEditar} alt="borrar pedido" />
          </div>
        </div>

      </section>
    </section>
  )
}

export default Pedidos