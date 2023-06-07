import React from 'react'
import { Card } from 'react-bootstrap'

const Cardb = ({ image, name, fill, price, boton1, boton2,boton3 }) => { 
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='border-bottom p-2'><h3><b>{name}</b></h3></Card.Title>
                    <Card.Text className='border-bottom p-2'>
                        <h3><b>${price}</b></h3>
                    </Card.Text>
                    <div className='d-flex mx-1 justify-content-center'>
                      {boton1}
                      {boton2}
                      {boton3}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Cardb

