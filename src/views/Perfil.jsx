import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Provider'
import "../styles/perfil.css"
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Perfil = () => {
    const { user,users,setUsers,setUser } = useContext(Context)
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
            id:user.id,
            name:name,
            lastname:lastname,
            email:email,
            password:password,
            profileImage: user.profileImage
        }
        const usersFilt = users.filter(item => item.id !== user.id)
        setUsers([...usersFilt,updateUser])
        setUser(updateUser)
        alert("Datos actualizados con exito")
        navigate("/")
      
        
    }
    
    return (
        <div className='perfil'>
            <div className='card-perfil bg-body-secondary'>
                <div className='perfil-img' style={{ backgroundImage: `url('${user.profileImage}') ` }}>

                </div>
                <Form onSubmit={handleSubmit}>
                <div className='perf-desc'>
                    <h5 className='mb-2'>Bienbenido {"  "}{user.name}</h5>
                    <div className='perf-name'>
                        <span>Nombre:</span><Form.Control className='input' type="text" onChange={(e) => { setName(e.target.value) }} placeholder={user.name} name="name" required />
                    </div>
                    <div className='perf-lastname'>
                        <span>Apellido :</span><Form.Control className='input' type="text" onChange={(e) => { setLastname(e.target.value) }} placeholder={user.lastname} name="lastname" required />
                    </div>
                    <div className='perf-name'>
                        <span>Email :</span><Form.Control className='input' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder={user.email} name="email" required />
                    </div>
                    <div className='perf-name'>
                        <span>Contraseña :</span><Form.Control className='input' type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" required />
                    </div>
                    <div className='perf-name'>
                        <span>Repetir Contraseña :</span><Form.Control className='input' type="password" onChange={(e) => { setRepassword(e.target.value) }} name="rppassword" required />
                    </div>
                    <div>
                        <Button type='submit' className='bg-primary' onSubmit={console.log(users)}>Editar</Button>
                    </div>                  
                </div>
                </Form>
            </div>
        </div>
    )
}

export default Perfil