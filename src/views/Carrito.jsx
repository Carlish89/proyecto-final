import React from 'react'
import { Context } from '../Context/Provider'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { capitalizarPrimeraLetra } from './Home' 
import "../styles/carrito.css"

const Carrito = () => {

    const { carrito } = useContext(Context)
    const { setCarrito } = useContext(Context)
    const value = useContext(Context)
    const precioAc = value.precioAc
    const setPrecioAc = value.setPrecioAc
    const añadirProducto = value.añadirProducto
    const eliminarProducto = value.eliminarProducto
    const sumaAc = value.sumaAc
    const newCarrito = carrito.sort(function (a, b) { 
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    })
    let productoList = []
    let contador = 1
    const newLista = () => {

        for (let i = 0; i < newCarrito.length; i++) {
            if (newCarrito[i] === newCarrito[i + 1]) {
                contador++
            }
            else {
                const newProductoList = {
                    id: newCarrito[i].id,
                    name: newCarrito[i].nombre,
                    price: newCarrito[i].price,
                    img: newCarrito[i].imagen,
                    count: contador,
                    result: contador * newCarrito[i].price
                }
                productoList = [...productoList, newProductoList]
                contador = 1
            }
        }
    }
    newLista()
    console.log(productoList)
    setCarrito(newCarrito)
    return (
        <div className='carrito-cont'>
            <div className='cont'>
                <h3><b>Detalle del pedido:</b></h3>
                {productoList.map((producto) =>
                    <div className='carrito-card border-bottom'>
                        <div className='carrito-b1'>
                            <img className='carrito-img' src={producto.img} alt="" />{"  "}<b>{capitalizarPrimeraLetra(producto.name)}</b>
                        </div>
                        <div className='carrito-b2'>
                            <b className='text-success'>${producto.result}</b> {"   "}<Button onClick={() => { añadirProducto(producto.id); setPrecioAc(sumaAc(producto.id)) }} variant="primary" className='mx-2 bg-primary border border-0'>+</Button><b>{producto.count}</b><Button onClick={() => { eliminarProducto(producto.id) }} variant="primary" className='mx-2 bg-danger border border-0'>-</Button>
                        </div>
                    </div>
                )}
                <h3 className='m-3'><b>Total:{"   "}${precioAc}{"   "}<Button variant="primary" className='mx-2 bg-success border border-0'><b>Finalizar Compra</b></Button></b></h3>
            </div>
        </div>
    )
}

export default Carrito