import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/login.css"
import { Context } from '../Context/Provider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { login, email, setEmail, password, setPassword } = useContext(Context)
    const navigate = useNavigate();
    const handleSubmit =  (e) => {
        e.preventDefault()
        const user = login(email, password);
        if (user) {
            
            return navigate("/productos");
        }
        alert("credenciales incorrectas");
    }
    return (
        <div className='login'>
            <div className="container-login">
                <div className="card-login">
                    <div className="title-login">
                        <h3>Iniciar sesión</h3>
                        <hr />
                    </div>
                    <div className="email-password">
                        <p>Correo electrónico</p>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="email-password">
                        <p>Contraseña</p>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Ingresar
                    </Button>
                    <div className="validates-data">
                        <p>¿Aún no tienes una cuenta M-Place? </p>
                        <Link to="/registro">
                            <Button type="submit" variant="primary">
                                Crear nueva cuenta
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login