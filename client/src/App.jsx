import './App.css'
import BottomMenu from './components/BottomMenu'
import Vendedora from './pages/Vendedoras/Vendedora'
import Pedidos from './pages/Pedidos/Pedidos'

function App() {

  return (
    <>
    <section className='contenedor-principal'>
    <Vendedora/>
    </section>
    <BottomMenu/>
    </>
  )
}

export default App
