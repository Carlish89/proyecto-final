import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import "../styles/login.css"
import { Context } from '../Context/Provider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Registro = () => {

  const { registro, users } = useContext(Context)
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      alert("Contraseñas no coinciden")
      return
    }

    const user = registro({
      name,
      email,
      lastname,
      password,
      id: Date.now(),
      profileImage: "https://assets.ey.com/content/dam/ey-sites/ey-com/shared/ey-people-profile-standard.jpg/ey-people-profile-standard.jpg"
    });
    if (user) {
      alert("Email ya registrado")
      return
    }

    alert("usuario registrado co exito")
    navigate("/perfil")

  };

  return (
    <div>
      <div className='login'>
        <div className='container-login'>
          <div className='card-login'>
            <div className='title-login'>
              <h3>Registrarse</h3>
              <hr />
            </div>
            <Form className="inputs-register" onSubmit={handleSubmit} >
              <div className='email-password'>
                <p>Email</p>
                <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Ingrese su Email" name="email" required />
              </div>
              <div className='email-password'>
                <p>Contraseña</p>
                <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Nueva contraseña" name="password" required />
              </div>
              <div className='email-password'>
                <p>Repetir contraseña</p>
                <Form.Control type="password" onChange={(e) => { setRepassword(e.target.value) }} placeholder="Nueva contraseña" name="repeatPassword" required />
              </div>
              <div className='name-validation'>
                <div>
                  <p>Nombre</p>
                  <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Ingrese su nombre" name="name" required />
                </div>
                <div>
                  <p>Apellido</p>
                  <Form.Control type="text" onChange={(e) => { setLastname(e.target.value) }} placeholder="Ingrese su apellido" name="lastName" required />
                </div>
              </div>
              <Button id="btn-register" type='submit' variant='primary'>Registrarse</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro