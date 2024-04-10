import React from 'react'
import './BottomMenu.css'
import iconPedidos from '../assets/iconos/icon-pedido.png';
import iconVendedora from '../assets/iconos/icon-vendedoras.png';
import iconHome from '../assets/iconos/icon-casa.png';
import iconRuta from '../assets/iconos/icon-camion.png';
import iconEstadisticas from '../assets/iconos/icon-estadisticas.png';

const BottomMenu = () => {

  return (
    <footer className="menu-footer">
      <section className="contenedor-menu">
        <div className="opcion-contenedor">
          <img src={iconPedidos} alt="" className="opcion-img" />
          <p className="opcion-titulo">Pedidos</p>
        </div>

        <div className="opcion-contenedor">
          <img src={iconVendedora} alt="" className="opcion-img" />
          <p className="opcion-titulo">Clientes</p>
        </div>

        <div className="opcion-contenedor">
          <img src={iconHome} alt="" className="opcion-img" />
          <p className="opcion-titulo">Inicio</p>
        </div>

        <div className="opcion-contenedor">
          <img src={iconRuta} alt="" className="opcion-img" />
          <p className="opcion-titulo">Rutas</p>
        </div>

        <div className="opcion-contenedor">
          <img src={iconEstadisticas} alt="" className="opcion-img" />
          <p className="opcion-titulo">Ventas</p>
        </div>
      </section>
    </footer>
  )
}

export default BottomMenu