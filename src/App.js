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
import EditProduct from "./views/EditProduct";



function App() {

  const {user} = useContext(Context)
 
  

  return (
    <div className="App">
      
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={!user? <Login />: <Navigate to ="/"/>} />
            <Route path="/registro" element={!user? <Registro />: <Navigate to ="/"/>} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/dashboard" element={user? <Dashboard />: <Navigate to ="/login"/>} />
            <Route path="/carrito" element={user? <Carrito />: <Navigate to ="/login"/>} />
            <Route path="/producto/:id" element={<Detalle />} />
            <Route path="/perfil" element={user? <Perfil />: <Navigate to ="/login"/>} />
            <Route path="/agregarp" element={user? <AddProducto />: <Navigate to ="/login"/>} />
            <Route path="/publicaciones" element={user? <Publicaciones />: <Navigate to ="/login"/>} />
            <Route path="/publicaciones/:id" element={user? <EditProduct/>: <Navigate to ="/login"/>} />
          </Routes>
       

    </div>
  );
}

export default App;
