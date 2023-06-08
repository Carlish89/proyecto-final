import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Cardb from '../components/Cardb';
import { Context } from '../Context/Provider';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Productos = () => {
  const { productos, sortProducts, setSearchValue, setProductos } =
    useContext(Context);
  const value = useContext(Context);
  const [filterProduct, setFilterProduct] = useState(productos);
  const añadirProducto = value.añadirProducto;
  const sumaAc = value.sumaAc;
  const setPrecioAc = value.setPrecioAc;
  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    sortProducts(sortValue);
  };

  
  const filtrarProducto = (e) => {
    e.preventDefault();
    const query = e.target.value;
    let nuevaLista = [...filterProduct];
    let newLista = nuevaLista.filter((item) => {
      return item.nombre.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setProductos(newLista);
  };

  return (
    <div>
      <div className="find-product">
        <form className="search" action="">
          <Form.Select aria-label="Default select example" onChange={handleSortChange}>
            <option value="id"> Ordenar </option>
            <option value="price-lowest">Precio menor a mayor</option>
            <option value="price-highest">Precio mayor a menor</option>
          </Form.Select>
          <Form.Control placeholder="Buscar" onChange={filtrarProducto} />
        </form>
      </div>
      <div className="galeria  p-3 mt-5">
        {productos.map((productos) => (
          <div key={productos.nombre} className="card-g" style={{ width: '100%' }}>
            <Cardb
              image={productos.imagen}
              name={productos.nombre}
              price={productos.price}
              boton1={
                <Link to={`/producto/${productos.id}`}>
                  <Button variant="primary" className="mx-2 bg-primary border border-0">
                    Detalle
                  </Button>
                </Link>
              }
              boton2={
                <Button
                  variant="primary"
                  onClick={() => {
                    añadirProducto(productos.id);
                    setPrecioAc(sumaAc(productos.id));
                  }}
                  className="mx-2 bg-danger border border-0"
                >
                  Añadir 🛒
                </Button>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
