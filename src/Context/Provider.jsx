import { createContext, useState, useEffect } from "react";
export const Context = createContext()
export function Provider({ children }) {
    const [productos, setProductos] = useState([])
    const [sortOrder, setSortOrder] = useState("")
    const [searchValue,setSearchValue] =useState("")
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([])
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null)
    const [carrito, setCarrito] = useState([])
    const [arrayPrecios, setArrayPrecios] = useState([])
    const [precioAc, setPrecioAc] = useState(0)
    const [favoritos, setFavoritos] = useState([])
    const getProductos = async () => {
        const res = await fetch('/productos.json')
        const data = await res.json()
        setProductos(data)
    }
    const getUsers = async () => {
        const res = await fetch("users.json");
        const usersDB = await res.json();
        setUsers(usersDB)
        return usersDB;
    }
    const login =  (email, password) => {
        
            const userDB = users.find((user) => user.email === email && user.password === password)
            if (userDB) {
                setUser(userDB)
            }
            return userDB                
        }

    
    const añadirProducto = (id) => {
        const productoFilt = productos.filter(producto => producto.id === id)
        carrito.push(productoFilt)
        const newCarrito = [...carrito]
        const bestCarrito = newCarrito.flat()
        setCarrito(bestCarrito)
        console.log(carrito)
    }
    const sumaAc = (id) => {
        const productoFilt = productos.filter(productos => productos.id === id)
        const newproductos = productoFilt.flat()
        const price = newproductos[0].price
        arrayPrecios.push(price)
        const arrayAc = [...arrayPrecios]
        setArrayPrecios(arrayAc)
        const result = arrayPrecios.reduce((a, b) => a + b)
        return result
    }
    const eliminarProducto = (id) => {
        const index = carrito.findIndex(productos => productos.id === id)
        const price = carrito[index].price
        const indexp = arrayPrecios.findIndex(element => element === price)
        carrito.splice(index, 1)
        arrayPrecios.splice(indexp, 1)
        const betterList = carrito.flat()
        setPrecioAc(precioAc - price)
        setCarrito(betterList)

    }
    useEffect(() => {
        getProductos()
        getUsers()
    }, [])
    const getProduct = (id) => productos.find((producto) => producto.id === id)

    const registro = (user) => {
        const userDB = Array.isArray(users) ? users.find((item) => item.email === user.email) : null;
        if (userDB) return userDB;
        setUser(user);
        users.push(user)

    };
    const addFavoritos = (product) => {
        favoritos.push(product)
        const arrayfav = [...favoritos]
        setFavoritos(arrayfav)
        product.liked=true
      };
    
      const deleteFavoritos = (id) => {
        const newFavoritos = favoritos.filter((item) => item.id !== id);
        const index = productos.findIndex(item => item.id === id)
        productos[index].liked = false;
        setFavoritos(newFavoritos);
      };
      const addProduct = (id,name,desc,img,price) => {
        
        const newProduct = {
            id : Date.now(),
            nombre:name,
            price:price,
            imagen:img,
            descripcion:desc,
            userid: id,
            liked: false
        }
        productos.push(newProduct)
       
      }
      const deleteProducto = (id) => {
        const newProductos = productos.filter((item) => item.id !== id);
        setProductos(newProductos)
      }
      const sortProducts = (sortValue) => {
        let sortedProducts = [...productos];
    
        if (sortValue === 'price-lowest') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-highest') {
          sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'id') {
          sortedProducts.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
        }
    
        setProductos(sortedProducts);
        setSortOrder(sortValue);
      };


    const globalState = {
        productos,
        setProductos,
        login,
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        sumaAc,
        añadirProducto: añadirProducto,
        eliminarProducto,
        precioAc,
        setPrecioAc,
        carrito,
        setCarrito,
        getProduct,
        setArrayPrecios,
        registro,
        users,
        addFavoritos,
        deleteFavoritos,
        favoritos,
        setFavoritos,
        addProduct,
        deleteProducto,
        setSortOrder,
        sortOrder,
        sortProducts,
        searchValue,
        setSearchValue,
        setUsers

    }

    return <Context.Provider value={globalState}> {children} </Context.Provider>
}