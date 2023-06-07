import Navbar from "./components/Nbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Productos from "./views/Productos";
import { Context } from "./Context/Provider";
import { useContext } from "react";
import Dashboard from "./views/Dashboard";
import Carrito from "./views/Carrito";
import Detalle from "./views/Detalle";
import Perfil from "./views/Perfil";
import AddProducto from "./views/AddProducto";
import Publicaciones from "./views/Publicaciones";




function App() {

  const {user} = useContext(Context)
 
  console.log(user)

  return (
    <div className="App">
      
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/dashboard" element={user? <Dashboard />: <Navigate to ="/login"/>} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/producto/:id" element={<Detalle />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/agregarp" element={<AddProducto />} />
            <Route path="/publicaciones" element={<Publicaciones />} />
          </Routes>
       

    </div>
  );
}

export default App;
