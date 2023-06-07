import React, { useContext } from 'react'
import { Context } from '../Context/Provider'
import Cardb from '../components/Cardb'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import HeroImage from '../components/6410d115af951171f98aee7f_market-custom-icon-set-design-marketplace-webflow-template.png'
export function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Home = () => {

  const { productos } = useContext(Context)
  const value = useContext(Context)
  const añadirProducto = value.añadirProducto
  const sumaAc = value.sumaAc
  const setPrecioAc = value.setPrecioAc
  const precioAc = value.precioAc
  


  return (
    <div>
      <div className='himage d-flex justify-content-center align-items-center' style={{ backgroundImage: `url('${HeroImage}')` }}>
        <h1 className='text-white'>M-Place</h1>
      </div>
      <div className='galeria  p-3'>
        {productos.map(productos =>
          <div key={productos.nombre} className="card-g" style={{ width: '18rem' }}>
            <Cardb
              image={productos.imagen}
              name={productos.nombre}
              price={productos.price}
              boton1={<Link to={`producto/${productos.id}`}>
                <Button variant="primary" className='mx-2 bg-primary border border-0'>Detalle</Button>
              </Link>}
              boton2={<Button variant="primary" onClick={() => { añadirProducto(productos.id); setPrecioAc(sumaAc(productos.id)) }} className='mx-2 bg-danger border border-0'>Añadir 🛒</Button>}
            /></div>
        )}
      </div>
    </div>
  )
}

export default Home