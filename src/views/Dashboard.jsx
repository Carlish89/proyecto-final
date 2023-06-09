import React, { useContext } from 'react'
import "../styles/dashboard.css"
import { Button } from 'react-bootstrap'
import { Context } from '../Context/Provider'
import { Link } from 'react-router-dom'
import Cardb from '../components/Cardb'

const Dashboard = () => {

  const { favoritos, sumaAc, setPrecioAc, añadirProducto, deleteFavoritos } = useContext(Context)

  return (
    <div className='dashboard'>
      <div className='d-buttons'>
        <Link to="/publicaciones"><Button className='button bg-primary'> <b>Mis publicaciones</b> </Button></Link>
        <h1 className='h1-t'> <b>Dashboard</b> </h1>
        <Link to="/agregarp"><Button className='button bg-primary'><b>Agregar publicacion</b> </Button></Link>
       </div>
       <div>
        <h5> <b>Mis Favoritos</b> </h5>
      </div>
      <div className='d-galery'>
        {favoritos.map(favoritos =>
          <div key={favoritos.nombre} className="card-g" style={{ width: '18rem' }}>
            <Cardb
              image={favoritos.imagen}
              name={favoritos.nombre}
              price={favoritos.price}
              boton2={<Button variant="primary" onClick={() => { añadirProducto(favoritos.id); setPrecioAc(sumaAc(favoritos.id)) }} className='mx-2 bg-danger border border-0'>Añadir 🛒</Button>}
              boton3={<Button onClick={() => { deleteFavoritos(favoritos.id) }} className='mx-2 bg-warning border border-0'>Eliminar</Button>}
            /></div>
        )}
      </div>
    </div>
  )
}

export default Dashboard