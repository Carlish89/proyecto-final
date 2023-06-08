import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import logo from '../components/ma7809f3d2-marketplace-logo-facebook-marketplace-for-dealers-digital-air-strike.png'
import { useContext } from 'react'
import { Context } from '../Context/Provider'
import { useNavigate } from 'react-router-dom'


const Nbar = () => {
    const { user , setUser, carrito,setCarrito,setPrecioAc,setArrayPrecios, setFavoritos,favoritos} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="primary" expand="lg" className='navbar fixed-top mb-5' >
                <Container >
                    <div className='d-flex justify-content-center align-items-center'>
                        <Navbar.Brand className='logo' style={{ backgroundImage: `url('${logo}')` }}>
                            <NavLink to="/" style={{ textDecoration: 'none' }}></NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/" className={"p-2 text-light"} style={{ textDecoration: 'none' }}><b>M-Place</b></NavLink>
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="navbar-collapse" className='bg-light text-light border border-primary' />
                        <Navbar.Collapse id="navbar-collapse">
                            <Nav className="me-auto">
                                {user ? (
                                <>
                                    <NavLink to="/productos" className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>Productos</NavLink>
                                    <NavLink to="/dashboard" className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>{favoritos.length}❤️{"        "}Dashboard</NavLink>
                                    <NavLink to="/perfil" className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>Perfil</NavLink>
                                    <NavLink to="/carrito" className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>{carrito.length}{" "}🛒</NavLink>
                                    <Button onClick={() => {setUser(null);setCarrito([]);setPrecioAc(0);setFavoritos([]);setArrayPrecios([]); navigate("/")}}>logout</Button>
                                </>):(
                                <>
                                <NavLink to="/productos" className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>Productos</NavLink>
                                <NavLink to="/registro" className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>Registro</NavLink>
                                <NavLink to="/login" className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>Login</NavLink>
                                </>)}
                                
                                
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div >

    )
}

export default Nbar