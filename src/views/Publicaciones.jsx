import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Provider'
import Cardb from '../components/Cardb'
import { Button } from 'react-bootstrap'
import "../styles/dashboard.css"
import { Link } from 'react-router-dom'

const Publicaciones = () => {
    const { productos, user, deleteProducto } = useContext(Context)
    const productosFilt = productos.filter(producto => producto.userid === user.id)
    return (
        <div className='dashboard'>
            <div className='d-buttons'>
                <Link to="/dashboard"><Button className='button bg-primary'><b>Mis Favoritos</b></Button></Link>
                <h1 className='h1-t'> <b>Dashboard</b> </h1>
                <Link to="/agregarp"><Button className='button bg-primary'><b>Agregar nueva publicacion</b></Button></Link>
            </div>
            <div>
                <h5><b>Mis Publicaciones</b></h5>
            </div>
            <div className='pub-galery'>
                <div className='d-galery'>
                    {productosFilt.map(productosFilt =>
                        <div key={productosFilt.id} className="card-g" style={{ width: '18rem' }}>
                            <Cardb
                                image={productosFilt.imagen}
                                name={productosFilt.nombre}
                                price={productosFilt.price}
                                boton2={
                                    <Link to={`/publicaciones/${productosFilt.id}`}>
                                        <Button variant="primary" className='mx-2 bg-primary border border-0'>Editar</Button>
                                    </Link>}
                                boton3={<Button onClick={() => { deleteProducto(productosFilt.id) }} className='mx-2 bg-danger border border-0'>Eliminar</Button>}
                            /></div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Publicaciones