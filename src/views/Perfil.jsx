import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Provider'
import "../styles/perfil.css"
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Perfil = () => {
    const { user, users, setUsers, setUser } = useContext(Context)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== repassword) {
            alert("Contraseñas no coinciden")
            return
        }
        const updateUser = {
            id: user.id,
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            profileImage: user.profileImage
        }
        const usersFilt = users.filter(item => item.id !== user.id)
        setUsers([...usersFilt, updateUser])
        setUser(updateUser)
        alert("Datos actualizados con exito")
        navigate("/productos")


    }

    return (
        <div className='perfil'>
            <div className='card-perfil bg-body-secondary'>
                <div className='perfil-img' style={{ backgroundImage: `url('${user.profileImage}') ` }}>

                </div>
                <Form onSubmit={handleSubmit}>
                <h5 className='mb-2'>Bienvenido {"  "}{user.name}</h5>
                    <div className='perf-desc'>
                        <div className='perf-name'>
                            <span>Nombre:</span>
                            <span>Apellido :</span>
                            <span>Email :</span>
                            <span>Contraseña :</span>
                            <span>Repetir Contraseña :</span>
                        </div>
                        <div className='perf-forms'>
                            <Form.Control className='input' type="text" onChange={(e) => { setName(e.target.value) }} placeholder={user.name} name="name" required />
                            <Form.Control className='input' type="text" onChange={(e) => { setLastname(e.target.value) }} placeholder={user.lastname} name="lastname" required />
                            <Form.Control className='input' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder={user.email} name="email" required />
                            <Form.Control className='input' type="password" onChange={(e) => { setRepassword(e.target.value) }} name="rppassword" required />
                            <Form.Control className='input' type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" required />
                        </div>
                    </div>
                    <div className='button'>
                        <Button type='submit' className='bg-primary' onSubmit={console.log(users)}>Editar</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Perfil