import React from 'react';
import { Card } from 'react-bootstrap';

const Cardb = ({ image, name, fill, price, boton1, boton2, boton3 }) => {
  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={image} className="border-bottom p-2" />
        <Card.Body>
          <Card.Title style={{ height: '48px' }}>
            <b>{name}</b>
          </Card.Title>
          <Card.Text className="border-bottom p-2">
            <h5>
              <b>${price}</b>
            </h5>
          </Card.Text>
          <div className="d-flex mx-1 justify-content-center">
            {boton1}
            {boton2}
            {boton3}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cardb;
