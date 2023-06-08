import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Provider'
import Cardb from '../components/Cardb'
import { Button } from 'react-bootstrap'
import "../styles/publicaciones.css"
import { Link } from 'react-router-dom'

const Publicaciones = () => {
    const { productos, user, deleteProducto } = useContext(Context)
    const productosFilt = productos.filter(producto => producto.userid === user.id)
    return (
        <div className='publicaciones'>
            <div className='title'>
                <h1>Mis Publicaciones</h1>
            </div>
            <div className='pub-galery'>
                <div className='flex-container'>
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