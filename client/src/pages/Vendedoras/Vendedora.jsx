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

  //traer datos del formulario del componente hijo CardVendedora
  const [datosFormulario, setDatosFormulario] = useState(null);

  //guardar datos del formulario en un array de objetos
  const [arrayVendedoras, setArrayVendedoras] = useState([])


  //mostrar todas las vendedoras
  // const listaActualVendedoras = arrayVendedoras.map((clienta) => {
  //   return (
  //     <CardVendedora datos={clienta} />
  //   )
  // });

  //se reciben los datos del componente formulario y
  //se guardan en datosFormulario para despues mandarlos
  //al componente hijo CardVendedora
  const addVendedora = (datosFormulario) => {
    setDatosFormulario(datosFormulario);
    setArrayVendedoras([...arrayVendedoras, datosFormulario])

    //console.log(arrayVendedoras)

  }



  //TODO: crear componente card y llamar aqui
  //TODO: cargar la informacion en cada tarjeta de DB o de forma local
  return (
    <section className='seccion-vendedoras'>
      <h2 className='titulo-seccion'>Sección Clientes</h2>

      <section className='cards-contenedor'>

        {/* {datosFormulario && <CardVendedora datos={datosFormulario} />} */}
        {/* mostramos todas las clientas disponibles */}
        {arrayVendedoras.map((clienta) => <CardVendedora datos={clienta} />)}

        <div className="card-container-vendedora">
          <h3 className='nombre-vendedora'>{clientes[0].nombre}</h3>
          <p className='direccion-vendedora'><span>Dirección:</span> {clientes[0].direccion}</p>
          <p className='ruta-vendedora'><span>Ruta:</span> {clientes[0].ruta}</p>
          <p className='puntos-vendedora'><span>Puntos:</span> {clientes[0].puntos}</p>
          <p className='telefono-vendedora'><span>Teléfono:</span> {clientes[0].telefono}</p>
        </div>

      </section>

      <button className='btn-agregar-vendedora' onClick={handleOpenModal}>+</button>
      <ModalAgregarVendedora isOpen={modalOpen} onClose={handleCloseModal} addVendedora={addVendedora} />

    </section>
  )
}

export default Vendedora