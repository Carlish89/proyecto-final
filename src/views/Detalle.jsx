import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context/Provider'
import { Button } from 'react-bootstrap'
import "../styles/detalle.css"

const Detalle = () => {
    const params = useParams()
    const { productos,favoritos, user } = useContext(Context)
    const getProductoById = (id) => productos.find((producto) => producto.id === id)
    const nId = Number(params.id)
    const newProducto = getProductoById(nId)
    const value = useContext(Context)
    const añadirProducto = value.añadirProducto
    const sumaAc = value.sumaAc
    const setPrecioAc = value.setPrecioAc
    const addFavoritos = value.addFavoritos
    const disableButton = () => {
        if(newProducto.liked === true || !user){
            return true
        }
    }
   


    return (
        <div className='productoDesc'>
            <div className='desc-img' style={{ backgroundImage: `url(${newProducto.imagen})` }}>
            </div>
            <div className='desc-body'>
                <div className='desc-title'>
                    <h3><b>{newProducto.nombre}</b></h3>
                </div>
                <div className='desc-pdesc'>
                    <p>{newProducto.descripcion}</p>
                </div>
                <div className='desc-price'>
                    <div>
                        <h3><b>Precio:{'  '}${newProducto.price}</b></h3>
                    </div>
                    <div className='buttons'>
                        <Button disabled={!user} onClick={() => { añadirProducto(newProducto.id); setPrecioAc(sumaAc(newProducto.id)) }} variant="primary" className="btn-danger">Añadir🛒</Button>
                        <Button className='bg-warning' onClick={() => {addFavoritos(newProducto) ; console.log(favoritos)}} disabled={disableButton()}>Favoritos❤️</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle