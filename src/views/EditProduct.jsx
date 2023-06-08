import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import "../styles/login.css"
import { Context } from '../Context/Provider'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { productos,user,setProductos } = useContext(Context)
    const [nombre, setNombre] = useState("")
    const [price, setPrice] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("")
    const nId = Number(params.id)
    const getProductoById = (id) => productos.find((producto) => producto.id === id)
    const newProducto = getProductoById(nId)
    const precio = Number(price)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const updateProduct = {
            id:newProducto.id,
            nombre:nombre,
            descripcion:descripcion,
            imagen:imagen,
            price:precio,
            liked:false,
            userid:user.id
        }
        const filtProducts = productos.filter(item => item.id !== newProducto.id)
        setProductos([...filtProducts,updateProduct])
        alert("Producto actualizado con exito")
        navigate("/publicaciones")
    }
    return (
        <div>
            <div className='login'>
                <div className='container-login'>
                    <div className='card-login'>
                        <div className='title-login'>
                            <h3>Editar Producto</h3>
                            <hr/>
                        </div>
                        <Form className="inputs-register" onSubmit={handleSubmit} >
                            <div className='email-password'>
                                <p>Nombre Articulo</p>
                                <Form.Control type="text" onChange={(e) => { setNombre(e.target.value) }} placeholder={newProducto.nombre} name="Nombre" required />
                            </div>
                            <div className='name-validation'>
                                <div>
                                    <p>Precio</p>
                                    <Form.Control type="text" onChange={(e) => { setPrice(e.target.value) }} placeholder={newProducto.price} name="price" required />
                                </div>
                                <div>
                                    <p>Descripcion</p>
                                    <Form.Control type="text" onChange={(e) => { setDescripcion(e.target.value) }} placeholder={newProducto.descripcion} name="name" required />
                                </div>
                                <div>
                                    <p>Imagen</p>
                                    <Form.Control type="text" onChange={(e) => { setImagen(e.target.value) }} name="imagen"  required />
                                </div>
                            </div>
                            <Button id="btn-register" type='submit' variant='primary'>Editar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct