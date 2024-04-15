import React from 'react'
import './Vendedora.css'
import bicicleta from '../../components/bici.svg'
import BottomMenu from '../../components/BottomMenu'

const Vendedora = () => {
  return (
    <section className='seccion-vendedoras'>
      <h2 className='titulo-seccion'>Secccion de Clientes</h2>

      <section className='cards-contenedor'>
      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora</h3>
        <p className='direccion-vendedora'>Dirección: Monte Olimpo #329</p>
        <p className='ruta-vendedora'>Ruta: DGO</p>
        <p className='puntos-vendedora'>Puntos: 21000</p>
        <p className='telefono-vendedora'>Teléfono: 00 46 46 99 01</p>
        <img src={bicicleta} alt="bicicleta" className='bici' />
      </div>
      {/* ejemplos de aqui para abajo */}
      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora</h3>
        <p className='direccion-vendedora'>Dirección: Monte Olimpo #329</p>
        <p className='ruta-vendedora'>Ruta: DGO</p>
        <p className='puntos-vendedora'>Puntos: 21000</p>
        <p className='telefono-vendedora'>Teléfono: 00 46 46 99 01</p>
      </div>

      {/* <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora</h3>
        <p className='direccion-vendedora'>Dirección: Monte Olimpo #329</p>
        <p className='ruta-vendedora'>Ruta: DGO</p>
        <p className='puntos-vendedora'>Puntos: 21000</p>
        <p className='telefono-vendedora'>Teléfono: 00 46 46 99 01</p>
      </div> */}
      {/* <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora</h3>
        <p className='direccion-vendedora'>Dirección: Monte Olimpo #329</p>
        <p className='ruta-vendedora'>Ruta: DGO</p>
        <p className='puntos-vendedora'>Puntos: 21000</p>
        <p className='telefono-vendedora'>Teléfono: 00 46 46 99 01</p>
      </div> */}

      {/* <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora</h3>
        <p className='direccion-vendedora'>Dirección: Monte Olimpo #329</p>
        <p className='ruta-vendedora'>Ruta: DGO</p>
        <p className='puntos-vendedora'>Puntos: 21000</p>
        <p className='telefono-vendedora'>Teléfono: 00 46 46 99 01</p>
      </div> */}

      <div className="card-container-vendedora">
        <h3 className='nombre-vendedora'>Nombre Vendedora</h3>
        <p className='direccion-vendedora'>Dirección: Monte Olimpo #329</p>
        <p className='ruta-vendedora'>Ruta: DGO</p>
        <p className='puntos-vendedora'>Puntos: 21000</p>
        <p className='telefono-vendedora'>Teléfono: 00 46 46 99 01</p>
      </div>
      </section>

      <button className='btn-agregar-vendedora'>+</button>

    </section>
  )
}

export default Vendedora