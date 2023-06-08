import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import "../styles/login.css"
import { Context } from '../Context/Provider'
import { useNavigate } from 'react-router-dom'


const AddProducto = () => {
    const navigate = useNavigate()
    const {user,addProduct} = useContext(Context)
    const[nombre,setNombre] =useState("")
    const[price,setPrice] =useState("")
    const[descripcion,setDescripcion] =useState("")
    const[imagen,setImagen] =useState("")
   const handleSubmit = (e) => {
    e.preventDefault()
    const precio = Number(price)
    addProduct(user.id,nombre,descripcion,imagen,precio)
    alert("Publicacion agregada con exito")
    navigate("/publicaciones");
   }

   

    return (
        <div>
            <div className='login'>
                <div className='container-login'>
                    <div className='card-login'>
                        <div className='title-login'>
                            <h3>Añadir Articulo</h3>
                            <hr />
                        </div>
                        <Form className="inputs-register" onSubmit={handleSubmit} >
                            <div className='email-password'>
                                <p>Nombre Articulo</p>
                                <Form.Control type="text" onChange={(e) => { setNombre(e.target.value) }} placeholder="Nombre" name="Nombre" required />
                            </div>                           
                            <div className='name-validation'>
                                <div>
                                    <p>Precio</p>
                                    <Form.Control type="text" onChange={(e) => { setPrice(e.target.value) }} placeholder="Ingrese precio" name="price" required />
                                </div>
                                <div>
                                    <p>Descripcion</p>
                                    <Form.Control type="text" onChange={(e) => { setDescripcion(e.target.value) }} placeholder="Ingrese una descripcion" name="name" required />
                                </div>
                                <div>
                                    <p>Imagen</p>
                                    <Form.Control type="text" onChange={(e) => { setImagen(e.target.value) }}  name="lastName" required />
                                </div>
                            </div>
                            <Button id="btn-register" type='submit' variant='primary'>Publicar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducto